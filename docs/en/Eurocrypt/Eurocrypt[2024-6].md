# Eurocrypt[2024-6]
## Jolt: SNARKs for Virtual Machines via Lookups.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-6].md#jolt-snarks-for-virtual-machines-via-lookups)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-6].md#jolt-snarks-for-virtual-machines-via-lookups)
### Authors
* Arasu Arun, New York University, New York, USA
* Srinath Setty, Microsoft Research, New York, USA
* Justin Thaler, a16z crypto research, Washington, USA
* Justin Thaler, Georgetown University, Washington, USA
### Abstract
> Succinct Non-interactive Arguments of Knowledge (SNARKs) allow an untrusted prover to establish that it correctly ran some “witness-checking procedure” on a witness. A zkVM (short for zero-knowledge virtual machine) is a SNARK that allows the witness-checking procedure to be specified as a computer program written in the assembly language of a specific instruction set architecture (ISA).
> 
> A front-end converts computer programs into a lower-level representation such as an arithmetic circuit or generalization thereof. A SNARK for circuit-satisfiability can then be applied to the resulting circuit.
> 
> We describe a new front-end technique called Jolt that applies to a variety of ISAs. Jolt arguably realizes a vision called the lookup singularity, which seeks to produce circuits that only perform lookups into pre-determined lookup tables. The circuits output by Jolt primarily perform lookups into a gigantic lookup table, of size more than \(2^{128}\), that depends only on the ISA. The validity of the lookups are proved via a new lookup argument described in a companion work called Lasso [STW23]. Although size-\(2^{128}\) tables are vastly too large to materialize in full, the tables arising in Jolt are structured, avoiding costs that grow linearly with the table size.
> 
> We describe performance and auditability benefits of Jolt compared to prior zkVMs, focusing on the popular RISC-V ISA as a concrete example. The dominant cost for the Jolt prover applied to this ISA (on 64-bit data types) is equivalent to cryptographically committing to under eleven 256-bit field elements per step of the RISC-V CPU. This compares favorably to prior zkVM provers, even those focused on far simpler VMs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58751-1_1](https://doi.org/10.1007/978-3-031-58751-1_1)
## Constant-Size zk-SNARKs in ROM from Falsifiable Assumptions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-6].md#constant-size-zk-snarks-in-rom-from-falsifiable-assumptions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-6].md#constant-size-zk-snarks-in-rom-from-falsifiable-assumptions)
### Authors
* Helger Lipmaa, University of Tartu, Tartu, Estonia
* Roberto Parisella, Simula UiB, Bergen, Norway
* Janno Siim, Simula UiB, Bergen, Norway
### Abstract
> We prove that the seminal KZG polynomial commitment scheme (PCS) is black-box extractable under a simple falsifiable assumption \(\textsf{ARSDH}\). To create an interactive argument, we construct a compiler that combines a black-box extractable non-interactive PCS and a polynomial IOP (PIOP). The compiler incurs a minor cost per every committed polynomial. Applying the Fiat-Shamir transformation, we obtain slightly less efficient variants of well-known PIOP-based zk-SNARKs, such as Plonk, that are knowledge-sound in the ROM under the \(\textsf{ARSDH}\) assumption. Importantly, there is no need for idealized group models or knowledge assumptions. This results in the first known zk-SNARKs in the ROM from falsifiable assumptions with both an efficient prover and constant-size argument.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58751-1_2](https://doi.org/10.1007/978-3-031-58751-1_2)
## Lower-Bounds on Public-Key Operations in PIR.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-6].md#lower-bounds-on-public-key-operations-in-pir)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-6].md#lower-bounds-on-public-key-operations-in-pir)
### Authors
* Jesko Dujmovic, Helmholtz Center for Information Security (CISPA), Saarbrücken, Germany
* Jesko Dujmovic, Saarbrücken Graduate School of Computer Science, Saarbrücken, Germany
* Mohammad Hajiabadi, University of Waterloo, Waterloo, Canada
### Abstract
> Private information retrieval (PIR) is a fundamental cryptographic primitive that allows a user to fetch a database entry without revealing to the server which database entry it learns. PIR becomes non-trivial if the server communication is less than the database size. We show that building (even) very weak forms of PIR protocols requires that the amount of public-key operations scale linearly in the database size.
> 
> We then use this bound to examine the related problem of communication efficient oblivious transfer (OT) extension.
> 
> Oblivious transfer is a crucial building block in secure multi-party computation (MPC). In most MPC protocols, OT invocations are the main bottleneck in terms of computation and communication. OT extension techniques allow one to minimize the number of public-key operations in MPC protocols. One drawback of all existing OT extension protocols is their communication overhead. In particular, the sender’s communication is roughly double what is information-theoretically optimal.
> 
> We show that OT extension with close to optimal sender communication is impossible, illustrating that the communication overhead is inherent. Our techniques go much further; we can show many lower bounds on communication-efficient MPC. E.g. we prove that to build high-rate string OT with generic groups, the sender needs to do linearly many group operations.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58751-1_3](https://doi.org/10.1007/978-3-031-58751-1_3)
## Fast Public-Key Silent OT and More from Constrained Naor-Reingold.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-6].md#fast-public-key-silent-ot-and-more-from-constrained-naor-reingold)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-6].md#fast-public-key-silent-ot-and-more-from-constrained-naor-reingold)
### Authors
* Dung Bui, Université Paris Cité, CNRS, IRIF, Paris, France
* Geoffroy Couteau, Université Paris Cité, CNRS, IRIF, Paris, France
* Pierre Meyer, Aarhus Universitet, Aarhus, Denmark
* Alain Passelègue, CryptoLab Inc., Lyon, France
* Alain Passelègue, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Mahshid Riahinia, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
### Abstract
> Pseudorandom Correlation Functions (PCFs) allow two parties, given correlated evaluation keys, to locally generate arbitrarily many pseudorandom correlated strings, e.g. Oblivious Transfer (OT) correlations, which can then be used by the two parties to jointly run secure computation protocols. In this work, we provide a novel and simple approach for constructing PCFs for OT correlation, by relying on constrained pseudorandom functions for a class of constraints containing a weak pseudorandom function (wPRF). We then show that tweaking the Naor-Reingold pseudorandom function and relying on low-complexity pseudorandom functions allow us to instantiate our paradigm. We further extend our ideas to obtain efficient public-key PCFs, which allow the distribution of correlated keys between parties to be non-interactive: each party can generate a pair of public/secret keys, and any pair of parties can locally derive their correlated evaluation key by combining their secret key with the other party’s public key.
> 
> In addition to these theoretical contributions, we detail various optimizations and provide concrete instantiations of our paradigm relying on the Boneh-Ishai-Passelègue-Sahai-Wu wPRF and the Goldreich-Applebaum-Raykov wPRF. Putting everything together, we obtain public-key PCFs with a throughput of 15k–40k OT/s, which is of a similar order of magnitude to the state-of-the-art interactive PCFs and about 4 orders of magnitude faster than state-of-the art public-key PCFs.
> 
> As a side result, we also show that public-key PCFs can serve as a building block to construct reusable designated-verifier non-interactive zero-knowledge proofs (DV-NIZK) for NP. Combined with our instantiations, this yields simple and efficient reusable DV-NIZKs for NP in pairing-free groups.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58751-1_4](https://doi.org/10.1007/978-3-031-58751-1_4)
## Best-of-Both-Worlds Multiparty Quantum Computation with Publicly Verifiable Identifiable Abort.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-6].md#best-of-both-worlds-multiparty-quantum-computation-with-publicly-verifiable-identifiable-abort)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-6].md#best-of-both-worlds-multiparty-quantum-computation-with-publicly-verifiable-identifiable-abort)
### Authors
* Kai-Min Chung, Academia Sinica, Taipei, Taiwan
* Mi-Ying Huang, University of Southern California, Los Angeles, USA
* Jiapeng Zhang, University of Southern California, Los Angeles, USA
* Er-Cheng Tang, University of Washington, Seattle, USA
### Abstract
> Alon et al. (CRYPTO 2021) introduced a multiparty quantum computation protocol that is secure with identifiable abort (MPQC-SWIA). However, their protocol allows only inside MPQC parties to know the identity of malicious players. This becomes problematic when two groups of people disagree and need a third party, like a jury, to verify who the malicious party is. This issue takes on heightened significance in the quantum setting, given that quantum states may exist in only a single copy. Thus, we emphasize the necessity of a protocol with publicly verifiable identifiable abort (PVIA), enabling outside observers with only classical computational power to agree on the identity of the malicious party in case of an abort. However, achieving MPQC with PVIA poses significant challenges due to the no-cloning theorem, and previous works proposed by Mahadev (STOC 2018) and Chung et al. (Eurocrypt 2022) for classical verification of quantum computation fall short.
> 
> In this paper, we obtain the first MPQC-PVIA protocol assuming post-quantum oblivious transfer and a classical broadcast channel. The core component of our construction is a new authentication primitive called auditable quantum authentication (AQA) that identifies the malicious sender with overwhelming probability. Additionally, we provide the first MPQC protocol with best-of-both-worlds (BoBW) security, which guarantees output delivery with an honest majority and remains secure with abort even if the majority is dishonest. Our best-of-both-worlds MPQC protocol also satisfies PVIA upon abort.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58751-1_5](https://doi.org/10.1007/978-3-031-58751-1_5)
## The Hardness of LPN over Any Integer Ring and Field for PCG Applications.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-6].md#the-hardness-of-lpn-over-any-integer-ring-and-field-for-pcg-applications)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-6].md#the-hardness-of-lpn-over-any-integer-ring-and-field-for-pcg-applications)
### Authors
* Hanlin Liu, Shanghai Jiao Tong University, Shanghai, China
* Yu Yu, Shanghai Jiao Tong University, Shanghai, China
* Xiao Wang, Northwestern University, Evanston, USA
* Kang Yang, State Key Laboratory of Cryptology, Beijing, China
* Hanlin Liu, Shanghai Qi Zhi Institute, Shanghai, China
* Yu Yu, Shanghai Qi Zhi Institute, Shanghai, China
### Abstract
> Learning parity with noise (LPN) has been widely studied and used in cryptography. It was recently brought to new prosperity since Boyle et al. (CCS’18), putting LPN to a central role in designing secure multi-party computation, zero-knowledge proofs, private set intersection, and many other protocols. In this paper, we thoroughly studied the security of LPN problems in this particular context. We found that some important aspects have long been ignored and many conclusions from classical LPN cryptanalysis do not apply to this new setting, due to the low noise rates, extremely high dimensions, various types (in addition to \(\mathbb F _2\)) and noise distributions.
> 
> For LPN over a field, we give a parameterized reduction from exact-noise LPN to regular-noise LPN. Compared to the recent result by Feneuil, Joux and Rivain (Crypto’22), we significantly reduce the security loss by paying only a small additive price in dimension and number of samples.
> 
> We analyze the security of LPN over a ring \(\mathbb Z _{2^\lambda }\). Existing protocols based on LPN over integer rings use parameters as if they are over fields, but we found an attack that effectively reduces the weight of a noise by half compared to LPN over fields. Consequently, prior works that use LPN over \(\mathbb Z _{2^\lambda }\) overestimate up to 40 bits of security.
> 
> We provide a complete picture of the hardness of LPN over integer rings by showing: 1) the equivalence between its search and decisional versions; 2) an efficient reduction from LPN over \(\mathbb F _{2}\) to LPN over \(\mathbb Z _{2^\lambda }\); and 3) generalization of our results to any integer ring.
> 
> Finally, we provide an all-in-one estimator tool for the bit security of LPN parameters in the context of PCG, incorporating the recent advanced attacks.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58751-1_6](https://doi.org/10.1007/978-3-031-58751-1_6)
## Unlocking the Lookup Singularity with Lasso.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-6].md#unlocking-the-lookup-singularity-with-lasso)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-6].md#unlocking-the-lookup-singularity-with-lasso)
### Authors
* Srinath Setty, Microsoft Research, Redmond, USA
* Justin Thaler, a16z crypto research and Georgetown University, Washington DC, USA
* Riad Wahby, Carnegie Mellon University, Pittsburgh, USA
### Abstract
> This paper introduces Lasso, a new family of lookup arguments, which allow an untrusted prover to commit to a vector \(a \in \mathbb {F}^m\) and prove that all entries of a reside in some predetermined table \(t \in \mathbb {F}^n\). Lasso’s performance characteristics unlock the so-called “lookup singularity”. Lasso works with any multilinear polynomial commitment scheme, and provides the following efficiency properties.
> 
> For m lookups into a table of size n, Lasso’s prover commits to just \(m+n\) field elements. Moreover, the committed field elements are small, meaning that, no matter how big the field \(\mathbb {F}\) is, they are all in the set \(\{0, \dots , m\}\). When using a multiexponentiation-based commitment scheme, this results in the prover’s costs dominated by only \(O(m+n)\) group operations (e.g., elliptic curve point additions), plus the cost to prove an evaluation of a multilinear polynomial whose evaluations over the Boolean hypercube are the table entries. This represents a significant improvement in prover costs over prior lookup arguments (e.g., plookup, Halo2’s lookups, logUp).
> 
> Unlike all prior lookup arguments, if the table t is structured (in a precise sense that we define), then no party needs to commit to t, enabling the use of much larger tables than prior works (e.g., of size \(2^{128}\) or larger). Moreover, Lasso’s prover only “pays” in runtime for table entries that are accessed by the lookup operations. This applies to tables commonly used to implement range checks, bitwise operations, big-number arithmetic, and even transitions of a full-fledged CPU such as RISC-V. Specifically, for any integer parameter \(c>1\), Lasso’s prover’s dominant cost is committing to \(3 \cdot c \cdot m + c \cdot n^{1/c}\) field elements. Furthermore, all these field elements are “small”, meaning they are in the set \(\{0, \dots , \max \{m, n^{1/c}, q\}-1\}\), where q is the maximum value in any of the sub-tables that collectively capture t (in a precise manner that we define).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58751-1_7](https://doi.org/10.1007/978-3-031-58751-1_7)
## Efficient Pre-processing PIR Without Public-Key Cryptography.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-6].md#efficient-pre-processing-pir-without-public-key-cryptography)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-6].md#efficient-pre-processing-pir-without-public-key-cryptography)
### Authors
* Ashrujit Ghoshal, Carnegie Mellon University, Pittsburgh, USA
* Mingxun Zhou, Carnegie Mellon University, Pittsburgh, USA
* Elaine Shi, Carnegie Mellon University, Pittsburgh, USA
### Abstract
> Classically, Private Information Retrieval (PIR) was studied in a setting without any pre-processing. In this setting, it is well-known that 1) public-key cryptography is necessary to achieve non-trivial (i.e., sublinear) communication efficiency in the single-server setting, and 2) the total server computation per query must be linear in the size of the database, no matter in the single-server or multi-server setting. Recent works have shown that both of these barriers can be overcome if we are willing to introduce a pre-processing phase. In particular, a recent work called Piano showed that using only one-way functions, one can construct a single-server preprocessing PIR with \(\widetilde{O}(\sqrt{n})\) bandwidth and computation per query, assuming \(\widetilde{O}(\sqrt{n})\) client storage. For the two-server setting, the state-of-the-art is defined by two incomparable results. First, Piano immediately implies a scheme in the two-server setting with the same performance bounds as stated above. Moreover, Beimel et al. showed a two-server scheme with \(O(n^{1/3})\) bandwidth and \(O(n/\log ^2 n)\) computation per query, and one with \(O(n^{1/2 + \epsilon })\) cost both in bandwidth and computation—both schemes provide information theoretic security.
> 
> In this paper, we show that assuming the existence of one-way functions, we can construct a two-server preprocessing PIR scheme with \(\widetilde{O}(n^{1/4})\) bandwidth and \(\widetilde{O}(n^{1/2})\) computation per query, while requiring only \(\widetilde{O}(n^{1/2})\) client storage. We also construct a new single-server preprocessing PIR scheme with \(\widetilde{O}(n^{1/4})\) online bandwidth and \(\widetilde{O}(n^{1/2})\) offline bandwidth and computation per query, also requiring \(\widetilde{O}(n^{1/2})\) client storage. Specifically, the online bandwidth is the bandwidth required for the client to obtain an answer, and the offline bandwidth can be viewed as background maintenance work amortized to each query. Our new constructions not only advance the theoretical understanding of preprocessing PIR, but are also concretely efficient because the only cryptography needed is pseudorandom functions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58751-1_8](https://doi.org/10.1007/978-3-031-58751-1_8)
## Strong Batching for Non-interactive Statistical Zero-Knowledge.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-6].md#strong-batching-for-non-interactive-statistical-zero-knowledge)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-6].md#strong-batching-for-non-interactive-statistical-zero-knowledge)
### Authors
* Changrui Mu, National University of Singapore, Singapore, Singapore
* Prashant Nalini Vasudevan, National University of Singapore, Singapore, Singapore
* Shafik Nassar, UT Austin, Austin, USA
* Ron D. Rothblum, Technion, Haifa, Israel
### Abstract
> A zero-knowledge proof enables a prover to convince a verifier that \(x \in S\), without revealing anything beyond this fact. By running a zero-knowledge proof k times, it is possible to prove (still in zero-knowledge) that k separate instances \(x_1,\dots ,x_k\) are all in S. However, this increases the communication by a factor of k. Can one do better? In other words, is (non-trivial) zero-knowledge batch verification for S possible?
> 
> Recent works by Kaslasi et al. (TCC 2020, Eurocrypt 2021) show that any problem possessing a non-interactive statistical zero-knowledge proof (\(\textbf{NISZK}\)) has a non-trivial statistical zero-knowledge batch verification protocol. Their results had two major limitations: (1) to batch verify k inputs of size n each, the communication in their batch protocol is roughly \(\textrm{poly}(n,\log {k})+O(k)\), which is better than the naive cost of \(k \cdot \textrm{poly}(n)\) but still scales linearly with k, and, (2) the batch protocol requires \(\varOmega (k)\) rounds of interaction.
> 
> In this work we remove both of these limitations by showing that any problem in \(\textbf{NISZK}\) has a non-interactive statistical zero-knowledge batch verification protocol with communication \(\textrm{poly}(n,\log {k})\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58751-1_9](https://doi.org/10.1007/978-3-031-58751-1_9)
## Two-Round Maliciously-Secure Oblivious Transfer with Optimal Rate.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-6].md#two-round-maliciously-secure-oblivious-transfer-with-optimal-rate)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-6].md#two-round-maliciously-secure-oblivious-transfer-with-optimal-rate)
### Authors
* Pedro Branco, Max Planck Institute for Security and Privacy, Bochum, Germany
* Nico Döttling, Helmholtz Center for Information Security (CISPA), Saarbrücken, Germany
* Akshayaram Srinivasan, University of Toronto, Toronto, Canada
### Abstract
> We give a construction of a two-round batch oblivious transfer (OT) protocol in the CRS model that is UC-secure against malicious adversaries and has (near) optimal communication cost. Specifically, to perform a batch of k oblivious transfers where the sender’s inputs are bits, the sender and the receiver need to communicate a total of \(3k + o(k) \cdot \textsf{poly}(\lambda )\) bits. We argue that 3k bits are required by any protocol with a black-box and straight-line simulator. The security of our construction is proven assuming the hardness of Quadratic Residuosity (QR) and the Learning Parity with Noise (LPN).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58751-1_10](https://doi.org/10.1007/978-3-031-58751-1_10)
## Succinct Homomorphic Secret Sharing.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-6].md#succinct-homomorphic-secret-sharing)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-6].md#succinct-homomorphic-secret-sharing)
### Authors
* Damiano Abram, Aarhus University, Aarhus, Denmark
* Lawrence Roy, Aarhus University, Aarhus, Denmark
* Peter Scholl, Aarhus University, Aarhus, Denmark
### Abstract
> This work introduces homomorphic secret sharing (HSS) with succinct share size. In HSS, private inputs are shared between parties, who can then homomorphically evaluate a function on their shares, obtaining a share of the function output. In succinct HSS, a portion of the inputs can be distributed using shares whose size is sublinear in the number of such inputs. The parties can then locally evaluate a function f on the shares, with the restriction that f must be linear in the succinctly shared inputs.
> 
> We construct succinct, two-party HSS for branching programs, based on either the decisional composite residuosity assumption, a DDH-like assumption in class groups, or learning with errors with a superpolynomial modulus-to-noise ratio. We then give several applications of succinct HSS, which were only previously known using fully homomorphic encryption, or stronger tools:
> 
> Succinct vector oblivious linear evaluation (VOLE): Two parties can obtain secret shares of a long, arbitrary vector \(\boldsymbol{x}\), multiplied by a scalar \(\varDelta \), with communication sublinear in the size of the vector.
> 
> Batch, multi-party distributed point functions: A protocol for distributing a batch of secret, random point functions among N parties, for any polynomial N, with communication sublinear in the number of DPFs.
> 
> Sublinear MPC for any number of parties: Two new constructions of MPC with sublinear communication complexity, with N parties for any polynomial N: (1) For general layered Boolean circuits of size s, with communication \(O(N s/\log \log s)\), and (2) For layered, sufficiently wide Boolean circuits, with communication \(O(N s/\log s)\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58751-1_11](https://doi.org/10.1007/978-3-031-58751-1_11)
## How to Garble Mixed Circuits that Combine Boolean and Arithmetic Computations.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-6].md#how-to-garble-mixed-circuits-that-combine-boolean-and-arithmetic-computations)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-6].md#how-to-garble-mixed-circuits-that-combine-boolean-and-arithmetic-computations)
### Authors
* Hanjun Li, University of Washington, Seattle, USA
* Tianren Liu, Peking University, Beijing, China
### Abstract
> The study of garbling arithmetic circuits is initiated by Applebaum, Ishai, and Kushilevitz [FOCS’11], which can be naturally extended to mixed circuits. The basis of mixed circuits includes Boolean operations, arithmetic operations over a large ring and bit-decomposition that converts an arithmetic value to its bit representation. We construct efficient garbling schemes for mixed circuits.
> 
> In the random oracle model, we construct two garbling schemes:
> 
> The first scheme targets mixed circuits modulo some \(N\approx 2^b\). Addition gates are free. Each multiplication gate costs \(O(\lambda \cdot b^{1.5})\) communication. Each bit-decomposition costs \(O(\lambda \cdot b^{2} / \log {b})\).
> 
> The second scheme targets mixed circuit modulo some \(N\approx 2^b\). Each addition gate and multiplication gate costs \(O(\lambda \cdot b \cdot \log b / \log \log b)\). Every bit-decomposition costs \(O(\lambda \cdot b^2 / \log b)\).
> 
> Our schemes improve on the work of Ball, Malkin, and Rosulek [CCS’16] in the same model.
> 
> Additionally relying on the DCR assumption, we construct in the programmable random oracle model a more efficient garbling scheme targeting mixed circuits over \(\mathbb Z_{2^b}\), where addition gates are free, and each multiplication or bit-decomposition gate costs \(O(\lambda _{\text {DCR}} \cdot b)\) communication. We improve on the recent work of Ball, Li, Lin, and Liu [Eurocrypt’23] which also relies on the DCR assumption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58751-1_12](https://doi.org/10.1007/978-3-031-58751-1_12)
## M&M'S: Mix and Match Attacks on Schnorr-Type Blind Signatures with Repetition.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-6].md#m-ms-mix-and-match-attacks-on-schnorr-type-blind-signatures-with-repetition)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-6].md#m-ms-mix-and-match-attacks-on-schnorr-type-blind-signatures-with-repetition)
### Authors
* Khue Do, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Lucjan Hanzlik, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Eugenio Paracucchi, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Khue Do, Saarland University, Saarbrücken, Germany
* Eugenio Paracucchi, Saarland University, Saarbrücken, Germany
### Abstract
> Blind signatures allow the issuing of signatures on messages chosen by the user so that they ensure blindness of the message against the signer. Moreover, a malicious user cannot output \(\ell +1\) signatures while only finishing \(\ell \) signing sessions. This notion, called one-more unforgeability, comes in two flavors supporting either sequential or concurrent sessions. In this paper, we investigate the security of a class of blind signatures constructed from Sigma-protocols with small challenge space \(\mathcal {C}_{\varSigma }\) (i.e., polynomial in the security parameter), using k repetitions of the protocol to decrease the chances of a cheating prover. This class of schemes includes, among others, the Schnorr blind signature scheme with bit challenges and the recently proposed isogeny-based scheme CSI-Otter (Crypto’23).
> 
> For this class of blind signatures, we show a polynomial-time attack that breaks one-more unforgeability for any \(\ell \ge k\) concurrent sessions in time \(O(k \cdot |\mathcal {C}_{\varSigma }|)\). Contrary to the ROS attack, ours is generic and does not require any particular algebraic structure. We also propose a computational trade-off, where, for any \(t \le k\), our attack works for \(\ell = \frac{k}{t}\) in time \(O(\frac{k}{t} \cdot |\mathcal {C}_{\varSigma }|^t)\). The consequences of our attack are as follows. Schemes in the investigated class of blind signatures should not be used concurrently without applying specific transformations to boost the security to support more signing sessions. Moreover, for the parameters proposed for CSI-Otter (\(k=128\) and \(|\mathcal {C}_{\varSigma }|=2\)), the scheme becomes forgeable after 128 concurrent signing sessions for the basic attack and with only eight sessions in our optimized attack. We also show that for those parameters, it is even possible to compute two signatures in around 10 min with just one signing session using the computation power of the Bitcoin network. Thus, we show that, for sequential security, the parameter k must be at least doubled in the security parameter for any of the investigated schemes.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58751-1_13](https://doi.org/10.1007/978-3-031-58751-1_13)
## The Supersingular Endomorphism Ring and One Endomorphism Problems are Equivalent.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-6].md#the-supersingular-endomorphism-ring-and-one-endomorphism-problems-are-equivalent)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-6].md#the-supersingular-endomorphism-ring-and-one-endomorphism-problems-are-equivalent)
### Authors
* Aurel Page, Univ. Bordeaux, CNRS, INRIA, Bordeaux INP, IMB, UMR 5251, 33400, Talence, France
* Benjamin Wesolowski, ENS de Lyon, CNRS, UMPA, UMR 5669, Lyon, France
### Abstract
> The supersingular Endomorphism Ring problem is the following: given a supersingular elliptic curve, compute all of its endomorphisms. The presumed hardness of this problem is foundational for isogeny-based cryptography. The One Endomorphism problem only asks to find a single non-scalar endomorphism. We prove that these two problems are equivalent, under probabilistic polynomial time reductions.
> 
> We prove a number of consequences. First, assuming the hardness of the endomorphism ring problem, the Charles–Goren–Lauter hash function is collision resistant, and the SQIsign identification protocol is sound for uniformly random keys. Second, the endomorphism ring problem is equivalent to the problem of computing arbitrary isogenies between supersingular elliptic curves, a result previously known only for isogenies of smooth degree. Third, there exists an unconditional probabilistic algorithm to solve the endomorphism ring problem in time \(\tilde{O}(p^{1/2})\), a result that previously required to assume the generalized Riemann hypothesis.
> 
> To prove our main result, we introduce a flexible framework for the study of isogeny graphs with additional information. We prove a general and easy-to-use rapid mixing theorem.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58751-1_14](https://doi.org/10.1007/978-3-031-58751-1_14)
## Evaluating the Security of CRYSTALS-Dilithium in the Quantum Random Oracle Model.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-6].md#evaluating-the-security-of-crystals-dilithium-in-the-quantum-random-oracle-model)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-6].md#evaluating-the-security-of-crystals-dilithium-in-the-quantum-random-oracle-model)
### Authors
* Kelsey A. Jackson, University of Maryland, College Park, USA
* Carl A. Miller, University of Maryland, College Park, USA
* Daochen Wang, University of Maryland, College Park, USA
* Carl A. Miller, National Institute of Standards and Technology, Gaithersburg, USA
* Daochen Wang, University of British Columbia, Vancouver, Canada
### Abstract
> In the wake of recent progress on quantum computing hardware, the National Institute of Standards and Technology (NIST) is standardizing cryptographic protocols that are resistant to attacks by quantum adversaries. The primary digital signature scheme that NIST has chosen is \(\textsf{CRYSTALS}\hbox {-}\!\textsf{Dilithium}\). The hardness of this scheme is based on the hardness of three computational problems: Module Learning with Errors (\(\textsf{MLWE}\)), Module Short Integer Solution (\(\textsf{MSIS}\)), and \(\textsf{SelfTargetMSIS}\). \(\textsf{MLWE}\) and \(\textsf{MSIS}\) have been well-studied and are widely believed to be secure. However, \(\textsf{SelfTargetMSIS}\) is novel and, though classically as hard as \(\textsf{MSIS}\), its quantum hardness is unclear. In this paper, we provide the first proof of the hardness of \(\textsf{SelfTargetMSIS}\) via a reduction from \(\textsf{MLWE}\) in the Quantum Random Oracle Model (QROM). Our proof uses recently developed techniques in quantum reprogramming and rewinding. A central part of our approach is a proof that a certain hash function, derived from the \(\textsf{MSIS}\) problem, is collapsing. From this approach, we deduce a new security proof for \(\textsf{Dilithium}\) under appropriate parameter settings. Compared to the previous work by Kiltz, Lyubashevsky, and Schaffner (EUROCRYPT 2018) that gave the only other rigorous security proof for a variant of \(\textsf{Dilithium}\), our proof has the advantage of being applicable under the condition \(q = 1 \ \textrm{mod} \ 2n\), where q denotes the modulus and n the dimension of the underlying algebraic ring. This condition is part of the original \(\textsf{Dilithium}\) proposal and is crucial for the efficient implementation of the scheme. We provide new secure parameter sets for \(\textsf{Dilithium}\) under the condition \(q = 1 \ \textrm{mod} \ 2n\), finding that our public key size and signature size are about \(2.9\times \) and \(1.3\times \) larger, respectively, than those proposed by Kiltz et al. at the same security level.
> 
> [Full version: arXiv:2312.16619]

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58751-1_15](https://doi.org/10.1007/978-3-031-58751-1_15)
## Crypto Dark Matter on the Torus - Oblivious PRFs from Shallow PRFs and TFHE.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-6].md#crypto-dark-matter-on-the-torus-oblivious-prfs-from-shallow-prfs-and-tfhe)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-6].md#crypto-dark-matter-on-the-torus-oblivious-prfs-from-shallow-prfs-and-tfhe)
### Authors
* Martin R. Albrecht, King’s College London, London, UK
* Martin R. Albrecht, SandboxAQ, New York, USA
* Alex Davidson, NOVA LINCS & DI, FCT, Universidade NOVA de Lisboa, Lisbon, Portugal
* Amit Deo, Zama, Paris, France
* Daniel Gardham, University of Surrey, Guildford, UK
### Abstract
> Partially Oblivious Pseudorandom Functions (POPRFs) are 2-party protocols that allow a client to learn pseudorandom function (PRF) evaluations on inputs of its choice from a server. The client submits two inputs, one public and one private. The security properties ensure that the server cannot learn the private input, and the client cannot learn more than one evaluation per POPRF query. POPRFs have many applications including password-based key exchange and privacy-preserving authentication mechanisms. However, most constructions are based on classical assumptions, and those with post-quantum security suffer from large efficiency drawbacks.
> 
> In this work, we construct a novel POPRF from lattice assumptions and the “Crypto Dark Matter” PRF candidate (TCC’18) in the random oracle model. At a conceptual level, our scheme exploits the alignment of this family of PRF candidates, relying on mixed modulus computations, and programmable bootstrapping in the torus fully homomorphic encryption scheme (TFHE). We show that our construction achieves malicious client security based on circuit-private FHE, and client privacy from the semantic security of the FHE scheme. We further explore a heuristic approach to extend our scheme to support verifiability, based on the difficulty of computing cheating circuits in low depth. This would yield a verifiable (P)OPRF. We provide a proof-of-concept implementation and preliminary benchmarks of our construction. For the core online OPRF functionality, we require amortised 10.0 KB communication per evaluation and a one-time per-client setup communication of 2.5 MB.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58751-1_16](https://doi.org/10.1007/978-3-031-58751-1_16)
