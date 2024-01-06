# Eurocrypt[2019-2]
## Homomorphic Secret Sharing from Lattices Without FHE.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#homomorphic-secret-sharing-from-lattices-without-fhe)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#homomorphic-secret-sharing-from-lattices-without-fhe)
### Authors
* Elette Boyle, IDC Herzliya, Herzliya, Israel
* Lisa Kohl, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Peter Scholl, Aarhus University, Aarhus, Denmark
### Abstract
> Homomorphic secret sharing (HSS) is an analog of somewhat- or fully homomorphic encryption (S/FHE) to the setting of secret sharing, with applications including succinct secure computation, private manipulation of remote databases, and more. While HSS can be viewed as a relaxation of S/FHE, the only constructions from lattice-based assumptions to date build atop specific forms of threshold or multi-key S/FHE. In this work, we present new techniques directly yielding efficient 2-party HSS for polynomial-size branching programs from a range of lattice-based encryption schemes, without S/FHE. More concretely, we avoid the costly key-switching and modulus-reduction steps used in S/FHE ciphertext multiplication, replacing them with a new distributed decryption procedure for performing “restricted” multiplications of an input with a partial computation value. Doing so requires new methods for handling the blowup of “noise” in ciphertexts in a distributed setting, and leverages several properties of lattice-based encryption schemes together with new tricks in share conversion.
> 
> The resulting schemes support a superpolynomial-size plaintext space and negligible correctness error, with share sizes comparable to SHE ciphertexts, but cost of homomorphic multiplication roughly one order of magnitude faster. Over certain rings, our HSS can further support some level of packed SIMD homomorphic operations. We demonstrate the practical efficiency of our schemes within two application settings, where we compare favorably with current best approaches: 2-server private database pattern-match queries, and secure 2-party computation of low-degree polynomials.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_1](https://doi.org/10.1007/978-3-030-17656-3_1)
## Improved Bootstrapping for Approximate Homomorphic Encryption.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#improved-bootstrapping-for-approximate-homomorphic-encryption)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#improved-bootstrapping-for-approximate-homomorphic-encryption)
### Authors
* Hao Chen, Microsoft Research, Redmond, USA
* Yongsoo Song, Microsoft Research, Redmond, USA
* Ilaria Chillotti, imec-COSIC, KU Leuven, Leuven, Belgium
### Abstract
> Since Cheon et al. introduced a homomorphic encryption scheme for approximate arithmetic (Asiacrypt ’17), it has been recognized as suitable for important real-life usecases of homomorphic encryption, including training of machine learning models over encrypted data. A follow up work by Cheon et al. (Eurocrypt ’18) described an approximate bootstrapping procedure for the scheme. In this work, we improve upon the previous bootstrapping result. We improve the amortized bootstrapping time per plaintext slot by two orders of magnitude, from \(\sim \)1 s to \(\sim \)0.01 s. To achieve this result, we adopt a smart level-collapsing technique for evaluating DFT-like linear transforms on a ciphertext. Also, we replace the Taylor approximation of the sine function with a more accurate and numerically stable Chebyshev approximation, and design a modified version of the Paterson-Stockmeyer algorithm for fast evaluation of Chebyshev polynomials over encrypted data.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_2](https://doi.org/10.1007/978-3-030-17656-3_2)
## Minicrypt Primitives with Algebraic Structure and Applications.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#minicrypt-primitives-with-algebraic-structure-and-applications)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#minicrypt-primitives-with-algebraic-structure-and-applications)
### Authors
* Navid Alamati, University of Michigan, Ann Arbor, USA
* Navid Alamati, Fujitsu Laboratories of America, Sunnyvale, USA
* Hart Montgomery, Fujitsu Laboratories of America, Sunnyvale, USA
* Sikhar Patranabis, Fujitsu Laboratories of America, Sunnyvale, USA
* Arnab Roy, Fujitsu Laboratories of America, Sunnyvale, USA
* Sikhar Patranabis, IIT Kharagpur, Kharagpur, India
### Abstract
> Algebraic structure lies at the heart of Cryptomania as we know it. An interesting question is the following: instead of building (Cryptomania) primitives from concrete assumptions, can we build them from simple Minicrypt primitives endowed with some additional algebraic structure? In this work, we affirmatively answer this question by adding algebraic structure to the following Minicrypt primitives:
> 
> One-Way Function (OWF)
> 
> Weak Unpredictable Function (wUF)
> 
> Weak Pseudorandom Function (wPRF)
> 
> The algebraic structure that we consider is group homomorphism over the input/output spaces of these primitives. We also consider a “bounded” notion of homomorphism where the primitive only supports an a priori bounded number of homomorphic operations in order to capture lattice-based and other “noisy” assumptions. We show that these structured primitives can be used to construct many cryptographic protocols. In particular, we prove that:
> 
> (Bounded) Homomorphic OWFs (HOWFs) imply collision-resistant hash functions, Schnorr-style signatures and chameleon hash functions.
> 
> (Bounded) Input-Homomorphic weak UFs (IHwUFs) imply CPA-secure PKE, non-interactive key exchange, trapdoor functions, blind batch encryption (which implies anonymous IBE, KDM-secure and leakage-resilient PKE), CCA2 deterministic PKE, and hinting PRGs (which in turn imply transformation of CPA to CCA security for ABE/1-sided PE).
> 
> (Bounded) Input-Homomorphic weak PRFs (IHwPRFs) imply PIR, lossy trapdoor functions, OT and MPC (in the plain model).
> 
> In addition, we show how to realize any CDH/DDH-based protocol with certain properties in a generic manner using IHwUFs/IHwPRFs, and how to instantiate such a protocol from many concrete assumptions.
> 
> We also consider primitives with substantially richer structure, namely Ring IHwPRFs and L-composable IHwPRFs. In particular, we show the following:
> 
> Ring IHwPRFs with certain properties imply FHE.
> 
> 2-composable IHwPRFs imply (black-box) IBE, and L-composable IHwPRFs imply non-interactive \((L+1)\)-party key exchange.
> 
> Our framework allows us to categorize many cryptographic protocols based on which structured Minicrypt primitive implies them. In addition, it potentially makes showing the existence of many cryptosystems from novel assumptions substantially easier in the future.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_3](https://doi.org/10.1007/978-3-030-17656-3_3)
## Attacks only Get Better: How to Break FF3 on Large Domains.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#attacks-only-get-better-how-to-break-ff3-on-large-domains)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#attacks-only-get-better-how-to-break-ff3-on-large-domains)
### Authors
* Viet Tung Hoang, Department of Computer Science, Florida State University, Tallahassee, USA
* David Miller, Department of Computer Science, Florida State University, Tallahassee, USA
* Ni Trieu, Department of Computer Science, Oregon State University, Corvallis, USA
### Abstract
> We improve the attack of Durak and Vaudenay (CRYPTO’17) on NIST Format-Preserving Encryption standard FF3, reducing the running time from \(O(N^5)\) to \(O(N^{17/6})\) for domain \(\mathbb {Z}_N \times \mathbb {Z}_N\). Concretely, DV’s attack needs about \(2^{50}\) operations to recover encrypted 6-digit PINs, whereas ours only spends about \(2^{30}\) operations. In realizing this goal, we provide a pedagogical example of how to use distinguishing attacks to speed up slide attacks. In addition, we improve the running time of DV’s known-plaintext attack on 4-round Feistel of domain \(\mathbb {Z}_N \times \mathbb {Z}_N\) from \(O(N^3)\) time to just \(O(N^{5/3})\) time. We also generalize our attacks to a general domain \(\mathbb {Z}_M \times \mathbb {Z}_N\), allowing one to recover encrypted SSNs using about \(2^{50}\) operations. Finally, we provide some proof-of-concept implementations to empirically validate our results.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_4](https://doi.org/10.1007/978-3-030-17656-3_4)
## Session Resumption Protocols and Efficient Forward Security for TLS 1.3 0-RTT.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#session-resumption-protocols-and-efficient-forward-security-for-tls-1-3-0-rtt)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#session-resumption-protocols-and-efficient-forward-security-for-tls-1-3-0-rtt)
### Authors
* Nimrod Aviram, Tel Aviv University, Tel Aviv, Israel
* Kai Gellert, Paderborn University, Paderborn, Germany
* Tibor Jager, Paderborn University, Paderborn, Germany
### Abstract
> The TLS 1.3 0-RTT mode enables a client reconnecting to a server to send encrypted application-layer data in “0-RTT” (“zero round-trip time”), without the need for a prior interactive handshake. This fundamentally requires the server to reconstruct the previous session’s encryption secrets upon receipt of the client’s first message. The standard techniques to achieve this are Session Caches or, alternatively, Session Tickets. The former provides forward security and resistance against replay attacks, but requires a large amount of server-side storage. The latter requires negligible storage, but provides no forward security and is known to be vulnerable to replay attacks.
> 
> In this paper, we first formally define session resumption protocols as an abstract perspective on mechanisms like Session Caches and Session Tickets. We give a new generic construction that provably provides forward security and replay resilience, based on puncturable pseudorandom functions (PPRFs). This construction can immediately be used in TLS 1.3 0-RTT and deployed unilaterally by servers, without requiring any changes to clients or the protocol.
> 
> We then describe two new constructions of PPRFs, which are particularly suitable for use for forward-secure and replay-resilient session resumption in TLS 1.3. The first construction is based on the strong RSA assumption. Compared to standard Session Caches, for “128-bit security” it reduces the required server storage by a factor of almost 20, when instantiated in a way such that key derivation and puncturing together are cheaper on average than one full exponentiation in an RSA group. Hence, a 1 GB Session Cache can be replaced with only about 51 MBs of storage, which significantly reduces the amount of secure memory required. For larger security parameters or in exchange for more expensive computations, even larger storage reductions are achieved. The second construction combines a standard binary tree PPRF with a new “domain extension” technique. For a reasonable choice of parameters, this reduces the required storage by a factor of up to 5 compared to a standard Session Cache. It employs only symmetric cryptography, is suitable for high-traffic scenarios, and can serve thousands of tickets per second.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_5](https://doi.org/10.1007/978-3-030-17656-3_5)
## An Analysis of NIST SP 800-90A.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#an-analysis-of-nist-sp-800-90a)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#an-analysis-of-nist-sp-800-90a)
### Authors
* Joanne Woodage, Royal Holloway, University of London, Egham, UK
* Dan Shumow, Microsoft Research, Redmond, USA
### Abstract
> We investigate the security properties of the three deterministic random bit generator (DRBG) mechanisms in NIST SP 800-90A [2]. The standard received considerable negative attention due to the controversy surrounding the now retracted \(\mathsf{{DualEC\text {-}DRBG}}\), which appeared in earlier versions. Perhaps because of the attention paid to the DualEC, the other algorithms in the standard have received surprisingly patchy analysis to date, despite widespread deployment. This paper addresses a number of these gaps in analysis, with a particular focus on \(\mathsf{{HASH\text {-}DRBG}}\) and \(\mathsf{{HMAC\text {-}DRBG}}\). We uncover a mix of positive and less positive results. On the positive side, we prove (with a caveat) the robustness [13] of \(\mathsf{{HASH\text {-}DRBG}}\) and \(\mathsf{{HMAC\text {-}DRBG}}\) in the random oracle model (ROM). Regarding the caveat, we show that if an optional input is omitted, then – contrary to claims in the standard—\(\mathsf{{HMAC\text {-}DRBG}}\) does not even achieve the (weaker) property of forward security. We then conduct a more informal and practice-oriented exploration of flexibility in the standard. Specifically, we argue that these DRBGs have the property that partial state leakage may lead security to break down in unexpected ways. We highlight implementation choices allowed by the overly flexible standard that exacerbate both the likelihood, and impact, of such attacks. While our attacks are theoretical, an analysis of two open source implementations of \(\mathsf{{CTR\text {-}DRBG}}\) shows that these potentially problematic implementation choices are made in the real world.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_6](https://doi.org/10.1007/978-3-030-17656-3_6)
## Computationally Volume-Hiding Structured Encryption.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#computationally-volume-hiding-structured-encryption)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#computationally-volume-hiding-structured-encryption)
### Authors
* Seny Kamara, Brown University, Providence, USA
* Tarik Moataz, Brown University, Providence, USA
### Abstract
> We initiate the study of structured encryption schemes with computationally-secure leakage. Specifically, we focus on the design of volume-hiding encrypted multi-maps; that is, of encrypted multi-maps that hide the response length to computationally-bounded adversaries. We describe the first volume-hiding STE schemes that do not rely on naïve padding; that is, padding all tuples to the same length. Our first construction has efficient query complexity and storage but can be lossy. We show, however, that the information loss can be bounded with overwhelming probability for a large class of multi-maps (i.e., with lengths distributed according to a Zipf distribution). Our second construction is not lossy and can achieve storage overhead that is asymptotically better than naïve padding for Zipf-distributed multi-maps. We also show how to further improve the storage when the multi-map is highly concentrated in the sense that it has a large number of tuples with a large intersection. We achieve these results by leveraging computational assumptions; not just for encryption but, more interestingly, to hide the volumes themselves. Our first construction achieves this using a pseudo-random function whereas our second construction achieves this by relying on the conjectured hardness of the planted densest subgraph problem which is a planted variant of the well-studied densest subgraph problem. This assumption was previously used to design public-key encryptions schemes (Applebaum et al., STOC ’10) and to study the computational complexity of financial products (Arora et al., ICS ’10).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_7](https://doi.org/10.1007/978-3-030-17656-3_7)
## Locality-Preserving Oblivious RAM.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#locality-preserving-oblivious-ram)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#locality-preserving-oblivious-ram)
### Authors
* Gilad Asharov, Cornell/Cornell Tech, New York, USA
* Rafael Pass, Cornell/Cornell Tech, New York, USA
* Elaine Shi, Cornell/Cornell Tech, New York, USA
* T.-H. Hubert Chan, The University of Hong Kong, Pok Fu Lam, Hong Kong
* Kartik Nayak, University of Maryland, College Park, USA
* Ling Ren, MIT, Cambridge, USA
### Abstract
> Oblivious RAMs, introduced by Goldreich and Ostrovsky [JACM’96], compile any RAM program into one that is “memory oblivious”, i.e., the access pattern to the memory is independent of the input. All previous ORAM schemes, however, completely break the locality of data accesses (for instance, by shuffling the data to pseudorandom positions in memory).
> 
> In this work, we initiate the study of locality-preserving ORAMs—ORAMs that preserve locality of the accessed memory regions, while leaking only the lengths of contiguous memory regions accessed. Our main results demonstrate the existence of a locality-preserving ORAM with poly-logarithmic overhead both in terms of bandwidth and locality. We also study the tradeoff between locality, bandwidth and leakage, and show that any scheme that preserves locality and does not leak the lengths of the contiguous memory regions accessed, suffers from prohibitive bandwidth.
> 
> To the best of our knowledge, before our work, the only works combining locality and obliviousness were for symmetric searchable encryption [e.g., Cash and Tessaro (EUROCRYPT’14), Asharov et al. (STOC’16)]. Symmetric search encryption ensures obliviousness if each keyword is searched only once, whereas ORAM provides obliviousness to any input program. Thus, our work generalizes that line of work to the much more challenging task of preserving locality in ORAMs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_8](https://doi.org/10.1007/978-3-030-17656-3_8)
## Private Anonymous Data Access.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#private-anonymous-data-access)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#private-anonymous-data-access)
### Authors
* Ariel Hamlin, Department of Computer Science, Northeastern University, Boston, MA, USA
* Mor Weiss, Department of Computer Science, Northeastern University, Boston, MA, USA
* Daniel Wichs, Department of Computer Science, Northeastern University, Boston, MA, USA
* Rafail Ostrovsky, UCLA, Los Angeles, CA, USA
* Mor Weiss, Department of Computer Science, IDC Herzliya, Herzliya, Israel
### Abstract
> We consider a scenario where a server holds a huge database that it wants to make accessible to a large group of clients. After an initial setup phase, clients should be able to read arbitrary locations in the database while maintaining privacy (the server does not learn which locations are being read) and anonymity (the server does not learn which client is performing each read). This should hold even if the server colludes with a subset of the clients. Moreover, the run-time of both the server and the client during each read operation should be low, ideally only poly-logarithmic in the size of the database and the number of clients. We call this notion Private Anonymous Data Access (PANDA). PANDA simultaneously combines aspects of Private Information Retrieval (PIR) and Oblivious RAM (ORAM). PIR has no initial setup, and allows anybody to privately and anonymously access a public database, but the server’s run-time is linear in the data size. On the other hand, ORAM achieves poly-logarithmic server run-time, but requires an initial setup after which only a single client with a secret key can access the database. The goal of PANDA is to get the best of both worlds: allow many clients to privately and anonymously access the database as in PIR, while having an efficient server as in ORAM.
> 
> In this work, we construct bounded-collusion PANDA schemes, where the efficiency scales linearly with a bound on the number of corrupted clients that can collude with the server, but is otherwise poly-logarithmic in the data size and the total number of clients. Our solution relies on standard assumptions, namely the existence of fully homomorphic encryption, and combines techniques from both PIR and ORAM. We also extend PANDA to settings where clients can write to the database.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_9](https://doi.org/10.1007/978-3-030-17656-3_9)
## Reversible Proofs of Sequential Work.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#reversible-proofs-of-sequential-work)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#reversible-proofs-of-sequential-work)
### Authors
* Hamza Abusalah, SBA Research, Vienna, Austria
* Chethan Kamath, IST Austria, Am Campus 1, 3400, Klosterneuburg, Austria
* Karen Klein, IST Austria, Am Campus 1, 3400, Klosterneuburg, Austria
* Krzysztof Pietrzak, IST Austria, Am Campus 1, 3400, Klosterneuburg, Austria
* Michael Walter, IST Austria, Am Campus 1, 3400, Klosterneuburg, Austria
### Abstract
> Proofs of sequential work (PoSW) are proof systems where a prover, upon receiving a statement \(\chi \) and a time parameter T computes a proof \(\phi (\chi ,T)\) which is efficiently and publicly verifiable. The proof can be computed in T sequential steps, but not much less, even by a malicious party having large parallelism. A PoSW thus serves as a proof that T units of time have passed since \(\chi \) was received.
> 
> PoSW were introduced by Mahmoody, Moran and Vadhan [MMV11], a simple and practical construction was only recently proposed by Cohen and Pietrzak [CP18].
> 
> In this work we construct a new simple PoSW in the random permutation model which is almost as simple and efficient as [CP18] but conceptually very different. Whereas the structure underlying [CP18] is a hash tree, our construction is based on skip lists and has the interesting property that computing the PoSW is a reversible computation.
> 
> The fact that the construction is reversible can potentially be used for new applications like constructing proofs of replication. We also show how to “embed” the sloth function of Lenstra and Weselowski [LW17] into our PoSW to get a PoSW where one additionally can verify correctness of the output much more efficiently than recomputing it (though recent constructions of “verifiable delay functions” subsume most of the applications this construction was aiming at).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_10](https://doi.org/10.1007/978-3-030-17656-3_10)
## Incremental Proofs of Sequential Work.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#incremental-proofs-of-sequential-work)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#incremental-proofs-of-sequential-work)
### Authors
* Nico Döttling, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Russell W. F. Lai, Friedrich-Alexander-Universität Erlangen-Nürnberg, Erlangen, Germany
* Giulio Malavolta, Carnegie Mellon University, Pittsburgh, USA
### Abstract
> A proof of sequential work allows a prover to convince a verifier that a certain amount of sequential steps have been computed. In this work we introduce the notion of incremental proofs of sequential work where a prover can carry on the computation done by the previous prover incrementally, without affecting the resources of the individual provers or the size of the proofs.
> 
> To date, the most efficient instance of proofs of sequential work [Cohen and Pietrzak, Eurocrypt 2018] for N steps require the prover to have \(\sqrt{N}\) memory and to run for \(N + \sqrt{N}\) steps. Using incremental proofs of sequential work we can bring down the prover’s storage complexity to \(\log N\) and its running time to N.
> 
> We propose two different constructions of incremental proofs of sequential work: Our first scheme requires a single processor and introduces a poly-logarithmic factor in the proof size when compared with the proposals of Cohen and Pietrzak. Our second scheme assumes \(\log N\) parallel processors but brings down the overhead of the proof size to a factor of 9. Both schemes are simple to implement and only rely on hash functions (modelled as random oracles).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_11](https://doi.org/10.1007/978-3-030-17656-3_11)
## Tight Proofs of Space and Replication.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#tight-proofs-of-space-and-replication)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#tight-proofs-of-space-and-replication)
### Authors
* Ben Fisch, Stanford University, Stanford, USA
### Abstract
> We construct a concretely practical proof-of-space (PoS) with arbitrarily tight security based on stacked depth robust graphs and constant-degree expander graphs. A proof-of-space (PoS) is an interactive proof system where a prover demonstrates that it is persistently using space to store information. A PoS is arbitrarily tight if the honest prover uses exactly N space and for any \(\epsilon > 0\) the construction can be tuned such that no adversary can pass verification using less than \((1-\epsilon ) N\) space. Most notably, the degree of the graphs in our construction are independent of \(\epsilon \), and the number of layers is only \(O(\log (1/\epsilon ))\). The proof size is \(O(d/\epsilon )\). The degree d depends on the depth robust graphs, which are only required to maintain \(\varOmega (N)\) depth in subgraphs on 80% of the nodes. Our tight PoS is also secure against parallel attacks.
> 
> Tight proofs of space are necessary for proof-of-replication (PoRep), which is a publicly verifiable proof that the prover is dedicating unique resources to storing one or more retrievable replicas of a specified file. Our main PoS construction can be used as a PoRep, but data extraction is as inefficient as replica generation. We present a second variant of our construction called ZigZag PoRep that has fast/parallelizable data extraction compared to replica generation and maintains the same space tightness while only increasing the number of levels by roughly a factor two.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_12](https://doi.org/10.1007/978-3-030-17656-3_12)
## Founding Secure Computation on Blockchains.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#founding-secure-computation-on-blockchains)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#founding-secure-computation-on-blockchains)
### Authors
* Arka Rai Choudhuri, Johns Hopkins University, Baltimore, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, USA
### Abstract
> We study the foundations of secure computation in the blockchain-hybrid model, where a blockchain – modeled as a global functionality – is available as an Oracle to all the participants of a cryptographic protocol. We demonstrate both destructive and constructive applications of blockchains:
> 
> We show that classical rewinding-based simulation techniques used in many security proofs fail against blockchain-active adversaries that have read and post access to a global blockchain. In particular, we show that zero-knowledge (ZK) proofs with black-box simulation are impossible against blockchain-active adversaries.
> 
> Nevertheless, we show that achieving security against blockchain-active adversaries is possible if the honest parties are also blockchain active. We construct an \(\omega (1)\)-round ZK protocol with black-box simulation. We show that this result is tight by proving the impossibility of constant-round ZK with black-box simulation.
> 
> Finally, we demonstrate a novel application of blockchains to overcome the known impossibility results for concurrent secure computation in the plain model. We construct a concurrent self-composable secure computation protocol for general functionalities in the blockchain-hybrid model based on standard cryptographic assumptions.
> 
> We develop a suite of techniques for constructing secure protocols in the blockchain-hybrid model that we hope will find applications to future research in this area.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_13](https://doi.org/10.1007/978-3-030-17656-3_13)
## Uncovering Algebraic Structures in the MPC Landscape.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#uncovering-algebraic-structures-in-the-mpc-landscape)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#uncovering-algebraic-structures-in-the-mpc-landscape)
### Authors
* Navneet Agarwal, Indian Institute of Technology Bombay, Mumbai, India
* Sanat Anand, Indian Institute of Technology Bombay, Mumbai, India
* Manoj Prabhakaran, Indian Institute of Technology Bombay, Mumbai, India
### Abstract
> A fundamental problem in the theory of secure multi-party computation (MPC) is to characterize functions with more than 2 parties which admit MPC protocols with information-theoretic security against passive corruption. This question has seen little progress since the work of Chor and Ishai (1996), which demonstrated difficulties in resolving it. In this work, we make significant progress towards resolving this question in the important case of aggregating functionalities, in which m parties \(P_1,\dots ,P_m\) hold inputs \(x_1,\dots ,x_m\) and an aggregating party \(P_0\) must learn \(f(x_1,\dots ,x_m)\).
> 
> We uncover a rich class of algebraic structures that are closely related to secure computability, namely, “Commuting Permutations Systems” (CPS) and its variants. We present an extensive set of results relating these algebraic structures among themselves and to MPC, including new protocols, impossibility results and separations. Our results include a necessary algebraic condition and slightly stronger sufficient algebraic condition for a function to admit information-theoretically secure MPC protocols.
> 
> We also introduce and study new models of minimally interactive MPC (called UNIMPC and ), which not only help in understanding our positive and negative results better, but also open up new avenues for studying the cryptographic complexity landscape of multi-party functionalities. Our positive results include novel protocols in these models, which may be of independent practical interest.
> 
> Finally, we extend our results to a definition that requires UC security as well as semi-honest security (which we term strong security). In this model we are able to carry out the characterization of all computable functions, except for a gap in the case of aggregating functionalities.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_14](https://doi.org/10.1007/978-3-030-17656-3_14)
## Quantum Circuits for the CSIDH: Optimizing Quantum Evaluation of Isogenies.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#quantum-circuits-for-the-csidh-optimizing-quantum-evaluation-of-isogenies)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#quantum-circuits-for-the-csidh-optimizing-quantum-evaluation-of-isogenies)
### Authors
* Daniel J. Bernstein, Department of Computer Science, University of Illinois at Chicago, Chicago, IL, 60607-7045, USA
* Tanja Lange, Department of Mathematics and Computer Science, Technische Universiteit Eindhoven, P.O. Box 513, 5600 MB, Eindhoven, The Netherlands
* Chloe Martindale, Department of Mathematics and Computer Science, Technische Universiteit Eindhoven, P.O. Box 513, 5600 MB, Eindhoven, The Netherlands
* Lorenz Panny, Department of Mathematics and Computer Science, Technische Universiteit Eindhoven, P.O. Box 513, 5600 MB, Eindhoven, The Netherlands
### Abstract
> Choosing safe post-quantum parameters for the new CSIDH isogeny-based key-exchange system requires concrete analysis of the cost of quantum attacks. The two main contributions to attack cost are the number of queries in hidden-shift algorithms and the cost of each query. This paper analyzes algorithms for each query, introducing several new speedups while showing that some previous claims were too optimistic for the attacker. This paper includes a full computer-verified simulation of its main algorithm down to the bit-operation level.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_15](https://doi.org/10.1007/978-3-030-17656-3_15)
## A Quantum-Proof Non-malleable Extractor - With Application to Privacy Amplification Against Active Quantum Adversaries.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#a-quantum-proof-non-malleable-extractor-with-application-to-privacy-amplification-against-active-quantum-adversaries)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#a-quantum-proof-non-malleable-extractor-with-application-to-privacy-amplification-against-active-quantum-adversaries)
### Authors
* Divesh Aggarwal, Center of Quantum Technologies, and Department of Computer Science, NUS, Singapore, Singapore
* Kai-Min Chung, Institute of Information Science, Academia Sinica, Taipei, 11529, Taiwan
* Han-Hsuan Lin, Department of Computer Science, The University of Texas at Austin, Austin, USA
* Thomas Vidick, Department of Computing and Mathematical Sciences, California Institute of Technology, Pasadena, USA
### Abstract
> In privacy amplification, two mutually trusted parties aim to amplify the secrecy of an initial shared secret X in order to establish a shared private key K by exchanging messages over an insecure communication channel. If the channel is authenticated the task can be solved in a single round of communication using a strong randomness extractor; choosing a quantum-proof extractor allows one to establish security against quantum adversaries.
> 
> In the case that the channel is not authenticated, this simple solution is no longer secure. Nevertheless, Dodis and Wichs (STOC’09) showed that the problem can be solved in two rounds of communication using a non-malleable extractor, a stronger pseudo-random construction than a strong extractor.
> 
> We give the first construction of a non-malleable extractor that is secure against quantum adversaries. The extractor is based on a construction by Li (FOCS’12), and is able to extract from source of min-entropy rates larger than 1 / 2. Combining this construction with a quantum-proof variant of the reduction of Dodis and Wichs, due to Cohen and Vidick (unpublished) we obtain the first privacy amplification protocol secure against active quantum adversaries.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_16](https://doi.org/10.1007/978-3-030-17656-3_16)
## A Note on the Communication Complexity of Multiparty Computation in the Correlated Randomness Model.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#a-note-on-the-communication-complexity-of-multiparty-computation-in-the-correlated-randomness-model)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#a-note-on-the-communication-complexity-of-multiparty-computation-in-the-correlated-randomness-model)
### Authors
* Geoffroy Couteau, KIT, Karlsruhe, Germany
### Abstract
> Secure multiparty computation (\(\mathsf {MPC}\)) addresses the challenge of evaluating functions on secret inputs without compromising their privacy. A central question in multiparty computation is to understand the amount of communication needed to securely evaluate a circuit of size s. In this work, we revisit this fundamental question in the setting of information-theoretically secure \(\mathsf {MPC}\) in the correlated randomness model, where a trusted dealer distributes correlated random coins, independent of the inputs, to all parties before the start of the protocol. This setting is of strong theoretical interest, and has led to the most practically efficient \(\mathsf {MPC}\) protocols known to date.
> 
> While it is known that protocols with optimal communication (proportional to input plus output size) can be obtained from the LWE assumption, and that protocols with sublinear communication o(s) can be obtained from the DDH assumption, the question of constructing protocols with o(s) communication remains wide open for the important case of information-theoretic \(\mathsf {MPC}\) in the correlated randomness model; all known protocols in this model require O(s) communication in the online phase.
> 
> In this work, we exhibit the first generic multiparty computation protocol in the correlated randomness model with communication sublinear in the circuit size, for a large class of circuits. More precisely, we show the following: any size-s layered circuit (whose nodes can be partitioned into layers so that any edge connects adjacent layers) can be evaluated with \(O(s/\log \log s)\) communication. Our results holds for both boolean and arithmetic circuits, in the honest-but-curious setting, and do not assume honest majority. For boolean circuits, we extend our results to handle malicious corruption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_17](https://doi.org/10.1007/978-3-030-17656-3_17)
## Degree 2 is Complete for the Round-Complexity of Malicious MPC.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#degree-2-is-complete-for-the-round-complexity-of-malicious-mpc)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#degree-2-is-complete-for-the-round-complexity-of-malicious-mpc)
### Authors
* Benny Applebaum, Tel-Aviv University, Tel Aviv, Israel
* Zvika Brakerski, Weizmann Institute of Science, Rehovot, Israel
* Rotem Tsabary, Weizmann Institute of Science, Rehovot, Israel
### Abstract
> We show, via a non-interactive reduction, that the existence of a secure multi-party computation (MPC) protocol for degree-2 functions implies the existence of a protocol with the same round complexity for general functions. Thus showing that when considering the round complexity of MPC, it is sufficient to consider very simple functions.
> 
> Our completeness theorem applies in various settings: information theoretic and computational, fully malicious and malicious with various types of aborts. In fact, we give a master theorem from which all individual settings follow as direct corollaries. Our basic transformation does not require any additional assumptions and incurs communication and computation blow-up which is polynomial in the number of players and in \(S,2^D\), where S, D are the circuit size and depth of the function to be computed. Using one-way functions as an additional assumption, the exponential dependence on the depth can be removed.
> 
> As a consequence, we are able to push the envelope on the state of the art in various settings of MPC, including the following cases.
> 
> 3-round perfectly-secure protocol (with guaranteed output delivery) against an active adversary that corrupts less than 1/4 of the parties.
> 
> 2-round statistically-secure protocol that achieves security with “selective abort” against an active adversary that corrupts less than half of the parties.
> 
> Assuming one-way functions, 2-round computationally-secure protocol that achieves security with (standard) abort against an active adversary that corrupts less than half of the parties. This gives a new and conceptually simpler proof to the recent result of Ananth et al. (Crypto 2018).
> 
> Technically, our non-interactive reduction draws from the encoding method of Applebaum, Brakerski and Tsabary (TCC 2018). We extend these methods to ones that can be meaningfully analyzed even in the presence of malicious adversaries.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_18](https://doi.org/10.1007/978-3-030-17656-3_18)
## Two Round Information-Theoretic MPC with Malicious Security.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#two-round-information-theoretic-mpc-with-malicious-security)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#two-round-information-theoretic-mpc-with-malicious-security)
### Authors
* Prabhanjan Ananth, Massachusetts Institute of Technology, Cambridge, USA
* Arka Rai Choudhuri, Johns Hopkins University, Baltimore, USA
* Aarushi Goel, Johns Hopkins University, Baltimore, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
### Abstract
> We provide the first constructions of two round information-theoretic (IT) secure multiparty computation (MPC) protocols in the plain model that tolerate any \(t<n/2\) malicious corruptions. Our protocols satisfy the strongest achievable standard notions of security in two rounds in different communication models.
> 
> Previously, IT-MPC protocols in the plain model either required a larger number of rounds, or a smaller minority of corruptions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_19](https://doi.org/10.1007/978-3-030-17656-3_19)
## Designated-Verifier Pseudorandom Generators, and Their Applications.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#designated-verifier-pseudorandom-generators-and-their-applications)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#designated-verifier-pseudorandom-generators-and-their-applications)
### Authors
* Geoffroy Couteau, KIT, Karlsruhe, Germany
* Dennis Hofheinz, KIT, Karlsruhe, Germany
### Abstract
> We provide a generic construction of non-interactive zero-knowledge (NIZK) schemes. Our construction is a refinement of Dwork and Naor’s (FOCS 2000) implementation of the hidden bits model using verifiable pseudorandom generators (VPRGs). Our refinement simplifies their construction and relaxes the necessary assumptions considerably.
> 
> As a result of this conceptual improvement, we obtain interesting new instantiations:
> 
> A designated-verifier NIZK (with unbounded soundness) based on the computational Diffie-Hellman (CDH) problem. If a pairing is available, this NIZK becomes publicly verifiable. This constitutes the first fully secure CDH-based designated-verifier NIZKs (and more generally, the first fully secure designated-verifier NIZK from a non-generic assumption which does not already imply publicly-verifiable NIZKs), and it answers an open problem recently raised by Kim and Wu (CRYPTO 2018).
> 
> A NIZK based on the learning with errors (LWE) assumption, and assuming a non-interactive witness-indistinguishable (NIWI) proof system for bounded distance decoding (BDD). This simplifies and improves upon a recent NIZK from LWE that assumes a NIZK for BDD (Rothblum et al., PKC 2019).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_20](https://doi.org/10.1007/978-3-030-17656-3_20)
## Reusable Designated-Verifier NIZKs for all NP from CDH.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#reusable-designated-verifier-nizks-for-all-np-from-cdh)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#reusable-designated-verifier-nizks-for-all-np-from-cdh)
### Authors
* Willy Quach, Northeastern University, Boston, USA
* Daniel Wichs, Northeastern University, Boston, USA
* Ron D. Rothblum, Technion, Haifa, Israel
### Abstract
> Non-interactive zero-knowledge proofs (NIZKs) are a fundamental cryptographic primitive. Despite a long history of research, we only know how to construct NIZKs under a few select assumptions, such as the hardness of factoring or using bilinear maps. Notably, there are no known constructions based on either the computational or decisional Diffie-Hellman (CDH/DDH) assumption without relying on a bilinear map.
> 
> In this paper, we study a relaxation of NIZKs in the designated verifier setting (DV-NIZK), in which the public common-reference string is generated together with a secret key that is given to the verifier in order to verify proofs. In this setting, we distinguish between one-time and reusable schemes, depending on whether they can be used to prove only a single statement or arbitrarily many statements. For reusable schemes, the main difficulty is to ensure that soundness continues to hold even when the malicious prover learns whether various proofs are accepted or rejected by the verifier. One-time DV-NIZKs are known to exist for general NP statements assuming only public-key encryption. However, prior to this work, we did not have any construction of reusable DV-NIZKs for general NP statements from any assumption under which we didn’t already also have standard NIZKs.
> 
> In this work, we construct reusable DV-NIZKs for general NP statements under the CDH assumption, without requiring a bilinear map. Our construction is based on the hidden-bits paradigm, which was previously used to construct standard NIZKs. We define a cryptographic primitive called a hidden-bits generator (HBG), along with a designated-verifier variant (DV-HBG), which modularly abstract out how to use this paradigm to get both standard NIZKs and reusable DV-NIZKs. We construct a DV-HBG scheme under the CDH assumption by relying on techniques from the Cramer-Shoup hash-proof system, and this yields our reusable DV-NIZK for general NP statements under CDH.
> 
> We also consider a strengthening of DV-NIZKs to the malicious designated-verifier setting (MDV-NIZK) where the setup consists of an honestly generated common random string and the verifier then gets to choose his own (potentially malicious) public/secret key pair to generate/verify proofs. We construct MDV-NIZKs under the “one-more CDH” assumption without relying on bilinear maps.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_21](https://doi.org/10.1007/978-3-030-17656-3_21)
## Designated Verifier/Prover and Preprocessing NIZKs from Diffie-Hellman Assumptions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#designated-verifier-prover-and-preprocessing-nizks-from-diffie-hellman-assumptions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#designated-verifier-prover-and-preprocessing-nizks-from-diffie-hellman-assumptions)
### Authors
* Shuichi Katsumata, AIST, Tokyo, Japan
* Shota Yamada, AIST, Tokyo, Japan
* Ryo Nishimaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Takashi Yamakawa, NTT Secure Platform Laboratories, Tokyo, Japan
* Shuichi Katsumata, The University of Tokyo, Tokyo, Japan
### Abstract
> In a non-interactive zero-knowledge (NIZK) proof, a prover can non-interactively convince a verifier of a statement without revealing any additional information. Thus far, numerous constructions of NIZKs have been provided in the common reference string (CRS) model (CRS-NIZK) from various assumptions, however, it still remains a long standing open problem to construct them from tools such as pairing-free groups or lattices. Recently, Kim and Wu (CRYPTO’18) made great progress regarding this problem and constructed the first lattice-based NIZK in a relaxed model called NIZKs in the preprocessing model (PP-NIZKs). In this model, there is a trusted statement-independent preprocessing phase where secret information are generated for the prover and verifier. Depending on whether those secret information can be made public, PP-NIZK captures CRS-NIZK, designated-verifier NIZK (DV-NIZK), and designated-prover NIZK (DP-NIZK) as special cases. It was left as an open problem by Kim and Wu whether we can construct such NIZKs from weak paring-free group assumptions such as DDH. As a further matter, all constructions of NIZKs from Diffie-Hellman (DH) type assumptions (regardless of whether it is over a paring-free or paring group) require the proof size to have a multiplicative-overhead \(|C| \cdot \mathsf {poly}(\kappa )\), where |C| is the size of the circuit that computes the \(\mathbf {NP}\) relation.
> 
> In this work, we make progress of constructing (DV, DP, PP)-NIZKs with varying flavors from DH-type assumptions. Our results are summarized as follows:
> 
> DV-NIZKs for \(\mathbf {NP}\) from the CDH assumption over pairing-free groups. This is the first construction of such NIZKs on pairing-free groups and resolves the open problem posed by Kim and Wu (CRYPTO’18).
> 
> DP-NIZKs for \(\mathbf {NP}\) with short proof size from a DH-type assumption over pairing groups. Here, the proof size has an additive-overhead \(|C|+\mathsf {poly}(\kappa )\) rather then an multiplicative-overhead \(|C| \cdot \mathsf {poly}(\kappa )\). This is the first construction of such NIZKs (including CRS-NIZKs) that does not rely on the LWE assumption, fully-homomorphic encryption, indistinguishability obfuscation, or non-falsifiable assumptions.
> 
> PP-NIZK for \(\mathbf {NP}\) with short proof size from the DDH assumption over pairing-free groups. This is the first PP-NIZK that achieves a short proof size from a weak and static DH-type assumption such as DDH. Similarly to the above DP-NIZK, the proof size is \(|C|+\mathsf {poly}(\kappa )\). This too serves as a solution to the open problem posed by Kim and Wu (CRYPTO’18).
> 
> Along the way, we construct two new homomorphic authentication (HomAuth) schemes which may be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_22](https://doi.org/10.1007/978-3-030-17656-3_22)
## Building an Efficient Lattice Gadget Toolkit: Subgaussian Sampling and More.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#building-an-efficient-lattice-gadget-toolkit-subgaussian-sampling-and-more)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#building-an-efficient-lattice-gadget-toolkit-subgaussian-sampling-and-more)
### Authors
* Nicholas Genise, University of California, San Diego, La Jolla, USA
* Daniele Micciancio, University of California, San Diego, La Jolla, USA
* Yuriy Polyakov, New Jersey Institute of Technology, Newark, USA
### Abstract
> Many advanced lattice cryptography applications require efficient algorithms for inverting the so-called “gadget” matrices, which are used to formally describe a digit decomposition problem that produces an output with specific (statistical) properties. The common gadget inversion problems are the classical (often binary) digit decomposition, subgaussian decomposition, Learning with Errors (LWE) decoding, and discrete Gaussian sampling. In this work, we build and implement an efficient lattice gadget toolkit that provides a general treatment of gadget matrices and algorithms for their inversion/sampling. The main contribution of our work is a set of new gadget matrices and algorithms for efficient subgaussian sampling that have a number of major theoretical and practical advantages over previously known algorithms. Another contribution deals with efficient algorithms for LWE decoding and discrete Gaussian sampling in the Residue Number System (RNS) representation.
> 
> We implement the gadget toolkit in PALISADE and evaluate the performance of our algorithms both in terms of runtime and noise growth. We illustrate the improvements due to our algorithms by implementing a concrete complex application, key-policy attribute-based encryption (KP-ABE), which was previously considered impractical for CPU systems (except for a very small number of attributes). Our runtime improvements for the main bottleneck operation based on subgaussian sampling range from 18x (for 2 attributes) to 289x (for 16 attributes; the maximum number supported by a previous implementation). Our results are applicable to a wide range of other advanced applications in lattice cryptography, such as GSW-based homomorphic encryption schemes, leveled fully homomorphic signatures, other forms of ABE, some program obfuscation constructions, and more.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_23](https://doi.org/10.1007/978-3-030-17656-3_23)
## Approx-SVP in Ideal Lattices with Pre-processing.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#approx-svp-in-ideal-lattices-with-pre-processing)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#approx-svp-in-ideal-lattices-with-pre-processing)
### Authors
* Alice Pellet-Mary, Univ. Lyon, EnsL, UCBL, CNRS, Inria, LIP, 69342, Lyon Cedex 07, France
* Guillaume Hanrot, Univ. Lyon, EnsL, UCBL, CNRS, Inria, LIP, 69342, Lyon Cedex 07, France
* Damien Stehlé, Univ. Lyon, EnsL, UCBL, CNRS, Inria, LIP, 69342, Lyon Cedex 07, France
### Abstract
> We describe an algorithm to solve the approximate Shortest Vector Problem for lattices corresponding to ideals of the ring of integers of an arbitrary number field K. This algorithm has a pre-processing phase, whose run-time is exponential in \(\log |\varDelta |\) with \(\varDelta \) the discriminant of K. Importantly, this pre-processing phase depends only on K. The pre-processing phase outputs an “advice”, whose bit-size is no more than the run-time of the query phase. Given this advice, the query phase of the algorithm takes as input any ideal I of the ring of integers, and outputs an element of I which is at most \(\exp (\widetilde{O}((\log |\varDelta |)^{\alpha +1}/n))\) times longer than a shortest non-zero element of I (with respect to the Euclidean norm of its canonical embedding). This query phase runs in time and space \(\exp (\widetilde{O}( (\log |\varDelta |)^{\max (2/3, 1-2\alpha )}))\) in the classical setting, and\(\exp (\widetilde{O}((\log |\varDelta |)^{1-2\alpha }))\) in the quantum setting. The parameter \(\alpha \) can be chosen arbitrarily in [0, 1 / 2]. Both correctness and cost analyses rely on heuristic assumptions, whose validity is consistent with experiments.
> 
> The algorithm builds upon the algorithms from Cramer et al. [EUROCRYPT 2016] and Cramer et al. [EUROCRYPT 2017]. It relies on the framework from Buchmann [Séminaire de théorie des nombres 1990], which allows to merge them and to extend their applicability from prime-power cyclotomic fields to all number fields. The cost improvements are obtained by allowing precomputations that depend on the field only.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_24](https://doi.org/10.1007/978-3-030-17656-3_24)
## The General Sieve Kernel and New Records in Lattice Reduction.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#the-general-sieve-kernel-and-new-records-in-lattice-reduction)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#the-general-sieve-kernel-and-new-records-in-lattice-reduction)
### Authors
* Martin R. Albrecht, Information Security Group, Royal Holloway, University of London, Egham, UK
* Eamonn W. Postlethwaite, Information Security Group, Royal Holloway, University of London, Egham, UK
* Léo Ducas, Cryptology Group, CWI, Amsterdam, The Netherlands
* Marc Stevens, Cryptology Group, CWI, Amsterdam, The Netherlands
* Gottfried Herold, ENS Lyon, Laboratoire LIP, Lyon, France
* Elena Kirshanova, ENS Lyon, Laboratoire LIP, Lyon, France
### Abstract
> We propose the General Sieve Kernel (G6K, pronounced / e.si.ka/), an abstract stateful machine supporting a wide variety of lattice reduction strategies based on sieving algorithms. Using the basic instruction set of this abstract stateful machine, we first give concise formulations of previous sieving strategies from the literature and then propose new ones. We then also give a light variant of BKZ exploiting the features of our abstract stateful machine. This encapsulates several recent suggestions (Ducas at Eurocrypt 2018; Laarhoven and Mariano at PQCrypto 2018) to move beyond treating sieving as a blackbox SVP oracle and to utilise strong lattice reduction as preprocessing for sieving. Furthermore, we propose new tricks to minimise the sieving computation required for a given reduction quality with mechanisms such as recycling vectors between sieves, on-the-fly lifting and flexible insertions akin to Deep LLL and recent variants of Random Sampling Reduction.
> 
> Moreover, we provide a highly optimised, multi-threaded and tweakable implementation of this machine which we make open-source. We then illustrate the performance of this implementation of our sieving strategies by applying G6K to various lattice challenges. In particular, our approach allows us to solve previously unsolved instances of the Darmstadt SVP (151, 153, 155) and LWE (e.g. (75, 0.005)) challenges. Our solution for the SVP-151 challenge was found 400 times faster than the time reported for the SVP-150 challenge, the previous record. For exact-SVP, we observe a performance crossover between G6K and FPLLL’s state of the art implementation of enumeration at dimension 70.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_25](https://doi.org/10.1007/978-3-030-17656-3_25)
## Misuse Attacks on Post-quantum Cryptosystems.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#misuse-attacks-on-post-quantum-cryptosystems)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#misuse-attacks-on-post-quantum-cryptosystems)
### Authors
* Ciprian Băetu, EPFL, 1015, Lausanne, Switzerland
* F. Betül Durak, EPFL, 1015, Lausanne, Switzerland
* Loïs Huguenin-Dumittan, EPFL, 1015, Lausanne, Switzerland
* Abdullah Talayhan, EPFL, 1015, Lausanne, Switzerland
* Serge Vaudenay, EPFL, 1015, Lausanne, Switzerland
### Abstract
> Many post-quantum cryptosystems which have been proposed in the National Institute of Standards and Technology (NIST) standardization process follow the same meta-algorithm, but in different algebras or different encoding methods. They usually propose two constructions, one being weaker and the other requiring a random oracle. We focus on the weak version of nine submissions to NIST. Submitters claim no security when the secret key is used several times. In this paper, we analyze how easy it is to run a key recovery under multiple key reuse. We mount a classical key recovery under plaintext checking attacks (i.e., with a plaintext checking oracle saying if a given ciphertext decrypts well to a given plaintext) and a quantum key recovery under chosen ciphertext attacks. In the latter case, we assume quantum access to the decryption oracle.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_26](https://doi.org/10.1007/978-3-030-17656-3_26)
