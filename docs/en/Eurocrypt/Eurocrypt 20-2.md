# Eurocrypt 20-2
## Separate Your Domains: NIST PQC KEMs, Oracle Cloning and Read-Only Indifferentiability.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-2.md#separate-your-domains-nist-pqc-kems-oracle-cloning-and-read-only-indifferentiability)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-2.md#separate-your-domains-nist-pqc-kems-oracle-cloning-and-read-only-indifferentiability)
### Authors
* Mihir Bellare, Department of Computer Science and Engineering, University of California San Diego, San Diego, USA
* Hannah Davis, Department of Computer Science and Engineering, University of California San Diego, San Diego, USA
* Felix Günther, Department of Computer Science, ETH Zürich, Zürich, Switzerland
### Abstract
> It is convenient and common for schemes in the random oracle model to assume access to multiple random oracles (ROs), leaving to implementations the task—we call it oracle cloning—of constructing them from a single RO. The first part of the paper is a case study of oracle cloning in KEM submissions to the NIST Post-Quantum Cryptography standardization process. We give key-recovery attacks on some submissions arising from mistakes in oracle cloning, and find other submissions using oracle cloning methods whose validity is unclear. Motivated by this, the second part of the paper gives a theoretical treatment of oracle cloning. We give a definition of what is an “oracle cloning method” and what it means for such a method to “work,” in a framework we call read-only indifferentiability, a simple variant of classical indifferentiability that yields security not only for usage in single-stage games but also in multi-stage ones. We formalize domain separation, and specify and study many oracle cloning methods, including common domain-separating ones, giving some general results to justify (prove read-only indifferentiability of) certain classes of methods. We are not only able to validate the oracle cloning methods used in many of the unbroken NIST PQC KEMs, but also able to specify and validate oracle cloning methods that may be useful beyond that.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_1](https://doi.org/10.1007/978-3-030-45724-2_1)
## On the Memory-Tightness of Hashed ElGamal.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-2.md#on-the-memory-tightness-of-hashed-elgamal)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-2.md#on-the-memory-tightness-of-hashed-elgamal)
### Authors
* Ashrujit Ghoshal, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
### Abstract
> We study the memory-tightness of security reductions in public-key cryptography, focusing in particular on Hashed ElGamal. We prove that any straightline (i.e., without rewinding) black-box reduction needs memory which grows linearly with the number of queries of the adversary it has access to, as long as this reduction treats the underlying group generically. This makes progress towards proving a conjecture by Auerbach et al. (CRYPTO 2017), and is also the first lower bound on memory-tightness for a concrete cryptographic scheme (as opposed to generalized reductions across security notions). Our proof relies on compression arguments in the generic group model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_2](https://doi.org/10.1007/978-3-030-45724-2_2)
## Blind Schnorr Signatures and Signed ElGamal Encryption in the Algebraic Group Model.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-2.md#blind-schnorr-signatures-and-signed-elgamal-encryption-in-the-algebraic-group-model)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-2.md#blind-schnorr-signatures-and-signed-elgamal-encryption-in-the-algebraic-group-model)
### Authors
* Georg Fuchsbauer, TU Wien, Vienna, Austria
* Antoine Plouviez, Inria, Paris, France
* Antoine Plouviez, ENS, CNRS, PSL, Paris, France
* Yannick Seurin, ANSSI, Paris, France
### Abstract
> The Schnorr blind signing protocol allows blind issuing of Schnorr signatures, one of the most widely used signatures. Despite its practical relevance, its security analysis is unsatisfactory. The only known security proof is informal and in the combination of the generic group model (GGM) and the random oracle model (ROM) assuming that the “ROS problem” is hard. The situation is similar for (Schnorr-)signed ElGamal encryption, a simple CCA2-secure variant of ElGamal.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_3](https://doi.org/10.1007/978-3-030-45724-2_3)
## On Instantiating the Algebraic Group Model from Falsifiable Assumptions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-2.md#on-instantiating-the-algebraic-group-model-from-falsifiable-assumptions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-2.md#on-instantiating-the-algebraic-group-model-from-falsifiable-assumptions)
### Authors
* Thomas Agrikola, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Dennis Hofheinz, ETH Zürich, Zürich, Switzerland
* Julia Kastner, ETH Zürich, Zürich, Switzerland
### Abstract
> We provide a standard-model implementation (of a relaxation) of the algebraic group model (AGM, [Fuchsbauer, Kiltz, Loss, CRYPTO 2018]). Specifically, we show that every algorithm that uses our group is algebraic, and hence “must know” a representation of its output group elements in terms of its input group elements. Here, “must know” means that a suitable extractor can extract such a representation efficiently. We stress that our implementation relies only on falsifiable assumptions in the standard model, and in particular does not use any knowledge assumptions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_4](https://doi.org/10.1007/978-3-030-45724-2_4)
## Resource-Restricted Cryptography: Revisiting MPC Bounds in the Proof-of-Work Era.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-2.md#resource-restricted-cryptography-revisiting-mpc-bounds-in-the-proof-of-work-era)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-2.md#resource-restricted-cryptography-revisiting-mpc-bounds-in-the-proof-of-work-era)
### Authors
* Juan Garay, Department of Computer Science and Engineering, Texas A&M University, College Station, USA
* Aggelos Kiayias, School of Informatics, University of Edinburgh & IOHK, Edinburgh, UK
* Vassilis Zikas, School of Informatics, University of Edinburgh & IOHK, Edinburgh, UK
* Rafail M. Ostrovsky, Department of Computer Science and Department of Mathematics, UCLA, Los Angeles, USA
* Giorgos Panagiotakos, School of Informatics, University of Edinburgh, Edinburgh, UK
### Abstract
> Traditional bounds on synchronous Byzantine agreement (BA) and secure multi-party computation (MPC) establish that in absence of a private correlated-randomness setup, such as a PKI, protocols can tolerate up to \(t<n/3\) of the parties being malicious. The introduction of “Nakamoto style” consensus, based on Proof-of-Work (PoW) blockchains, put forth a somewhat different flavor of BA, showing that even a majority of corrupted parties can be tolerated as long as the majority of the computation resources remain at honest hands. This assumption on honest majority of some resource was also extended to other resources such as stake, space, etc., upon which blockchains achieving Nakamoto-style consensus were built that violated the \(t<n/3\) bound in terms of number of party corruptions. The above state of affairs begs the question of whether the seeming mismatch is due to different goals and models, or whether the resource-restricting paradigm can be generically used to circumvent the n/3 lower bound.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_5](https://doi.org/10.1007/978-3-030-45724-2_5)
## Efficient Constructions for Almost-Everywhere Secure Computation.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-2.md#efficient-constructions-for-almost-everywhere-secure-computation)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-2.md#efficient-constructions-for-almost-everywhere-secure-computation)
### Authors
* Siddhartha Jayanti, Massachusetts Institute of Technology (CSAIL MIT), Cambridge, USA
* Srinivasan Raghuraman, Massachusetts Institute of Technology (CSAIL MIT), Cambridge, USA
* Nikhil Vyas, Massachusetts Institute of Technology (CSAIL MIT), Cambridge, USA
### Abstract
> We study the problem of almost-everywhere reliable message transmission; a key component in designing efficient and secure Multi-party Computation (MPC) protocols for sparsely connected networks. The goal is to design low-degree networks which allow a large fraction of honest nodes to communicate reliably even when a small constant fraction of nodes experience byzantine corruption and deviate arbitrarily from the assigned protocol.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_6](https://doi.org/10.1007/978-3-030-45724-2_6)
## The Price of Active Security in Cryptographic Protocols.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-2.md#the-price-of-active-security-in-cryptographic-protocols)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-2.md#the-price-of-active-security-in-cryptographic-protocols)
### Authors
* Carmit Hazay, Bar-Ilan University, Ramat Gan, Israel
* Muthuramakrishnan Venkitasubramaniam, University of Rochester, Rochester, USA
* Mor Weiss, IDC Herzliya, Herzliya, Israel
### Abstract
> We construct the first actively-secure Multi-Party Computation (MPC) protocols with an arbitrary number of parties in the dishonest majority setting, for an arbitrary field \(\mathbb {F}\) with constant communication overhead over the “passive-GMW” protocol (Goldreich, Micali and Wigderson, STOC ‘87). Our protocols rely on passive implementations of Oblivious Transfer (OT) in the boolean setting and Oblivious Linear function Evaluation (OLE) in the arithmetic setting. Previously, such protocols were only known over sufficiently large fields (Genkin et al. STOC ‘14) or a constant number of parties (Ishai et al. CRYPTO ‘08).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_7](https://doi.org/10.1007/978-3-030-45724-2_7)
## Succinct Non-interactive Secure Computation.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-2.md#succinct-non-interactive-secure-computation)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-2.md#succinct-non-interactive-secure-computation)
### Authors
* Andrew Morgan, Cornell University, Ithaca, USA
* Rafael Pass, Cornell Tech, New York City, USA
* Antigoni Polychroniadou, J.P. Morgan AI Research, New York City, USA
### Abstract
> We present the first maliciously secure protocol for succinct non-interactive secure two-party computation (SNISC): Each player sends just a single message whose length is (essentially) independent of the running time of the function to be computed. The protocol does not require any trusted setup, satisfies superpolynomial-time simulation-based security (SPS), and is based on (subexponential) security of the Learning With Errors (LWE) assumption. We do not rely on SNARKs or “knowledge of exponent”-type assumptions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_8](https://doi.org/10.1007/978-3-030-45724-2_8)
## Finding Hash Collisions with Quantum Computers by Using Differential Trails with Smaller Probability than Birthday Bound.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-2.md#finding-hash-collisions-with-quantum-computers-by-using-differential-trails-with-smaller-probability-than-birthday-bound)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-2.md#finding-hash-collisions-with-quantum-computers-by-using-differential-trails-with-smaller-probability-than-birthday-bound)
### Authors
* Akinori Hosoyamada, NTT Secure Platform Laboratories, Tokyo, Japan
* Yu Sasaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Akinori Hosoyamada, Nagoya University, Nagoya, Japan
### Abstract
> In this paper we spot light on dedicated quantum collision attacks on concrete hash functions, which has not received much attention so far. In the classical setting, the generic complexity to find collisions of an n-bit hash function is \(O(2^{n/2})\), thus classical collision attacks based on differential cryptanalysis such as rebound attacks build differential trails with probability higher than \(2^{-n/2}\). By the same analogy, generic quantum algorithms such as the BHT algorithm find collisions with complexity \(O(2^{n/3})\). With quantum algorithms, a pair of messages satisfying a differential trail with probability p can be generated with complexity \(p^{-1/2}\). Hence, in the quantum setting, some differential trails with probability up to \(2^{-2n/3}\) that cannot be exploited in the classical setting may be exploited to mount a collision attack in the quantum setting. In particular, the number of attacked rounds may increase. In this paper, we attack two international hash function standards: AES-MMO and Whirlpool. For AES-MMO, we present a 7-round differential trail with probability \(2^{-80}\) and use it to find collisions with a quantum version of the rebound attack, while only 6 rounds can be attacked in the classical setting. For Whirlpool, we mount a collision attack based on a 6-round differential trail from a classical rebound distinguisher with a complexity higher than the birthday bound. This improves the best classical attack on 5 rounds by 1. We also show that those trails are optimal in our approach. Our results have two important implications. First, there seems to exist a common belief that classically secure hash functions will remain secure against quantum adversaries. Indeed, several second-round candidates in the NIST post-quantum competition use existing hash functions, say SHA-3, as quantum secure ones. Our results disprove this common belief. Second, our observation suggests that differential trail search should not stop with probability \(2^{-n/2}\) but should consider up to \(2^{-2n/3}\). Hence it deserves to revisit the previous differential trail search activities.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_9](https://doi.org/10.1007/978-3-030-45724-2_9)
## Implementing Grover Oracles for Quantum Key Search on AES and LowMC.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-2.md#implementing-grover-oracles-for-quantum-key-search-on-aes-and-lowmc)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-2.md#implementing-grover-oracles-for-quantum-key-search-on-aes-and-lowmc)
### Authors
* Samuel Jaques, Department of Materials, University of Oxford, Oxford, UK
* Michael Naehrig, Microsoft Research, Redmond, WA, USA
* Martin Roetteler, Microsoft Quantum, Redmond, WA, USA
* Fernando Virdia, Information Security Group, Royal Holloway, University of London, Egham, UK
### Abstract
> Grover’s search algorithm gives a quantum attack against block ciphers by searching for a key that matches a small number of plaintext-ciphertext pairs. This attack uses \(O(\sqrt{N})\) calls to the cipher to search a key space of size N. Previous work in the specific case of AES derived the full gate cost by analyzing quantum circuits for the cipher, but focused on minimizing the number of qubits.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_10](https://doi.org/10.1007/978-3-030-45724-2_10)
## Optimal Merging in Quantum k-xor and k-xor-sum Algorithms.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-2.md#optimal-merging-in-quantum-k-xor-and-k-xor-sum-algorithms)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-2.md#optimal-merging-in-quantum-k-xor-and-k-xor-sum-algorithms)
### Authors
* María Naya-Plasencia, Inria, Paris, France
* André Schrottenloher, Inria, Paris, France
### Abstract
> The k-xor or Generalized Birthday Problem aims at finding, given k lists of bit-strings, a k-tuple among them XORing to 0. If the lists are unbounded, the best classical (exponential) time complexity has withstood since Wagner’s CRYPTO 2002 paper. If the lists are bounded (of the same size) and such that there is a single solution, the dissection algorithms of Dinur et al. (CRYPTO 2012) improve the memory usage over a simple meet-in-the-middle.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_11](https://doi.org/10.1007/978-3-030-45724-2_11)
## On the Quantum Complexity of the Continuous Hidden Subgroup Problem.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-2.md#on-the-quantum-complexity-of-the-continuous-hidden-subgroup-problem)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-2.md#on-the-quantum-complexity-of-the-continuous-hidden-subgroup-problem)
### Authors
* Koen de Boer, Cryptology Group, Centrum Wiskunde & Informatica (CWI), Amsterdam, The Netherlands
* Léo Ducas, Cryptology Group, Centrum Wiskunde & Informatica (CWI), Amsterdam, The Netherlands
* Serge Fehr, Cryptology Group, Centrum Wiskunde & Informatica (CWI), Amsterdam, The Netherlands
* Serge Fehr, Mathematical Institute, Leiden University, Leiden, The Netherlands
### Abstract
> The Hidden Subgroup Problem (HSP) aims at capturing all problems that are susceptible to be solvable in quantum polynomial time following the blueprints of Shor’s celebrated algorithm. Successful solutions to this problems over various commutative groups allow to efficiently perform number-theoretic tasks such as factoring or finding discrete logarithms.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_12](https://doi.org/10.1007/978-3-030-45724-2_12)
## Formalizing Data Deletion in the Context of the Right to Be Forgotten.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-2.md#formalizing-data-deletion-in-the-context-of-the-right-to-be-forgotten)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-2.md#formalizing-data-deletion-in-the-context-of-the-right-to-be-forgotten)
### Authors
* Sanjam Garg, Department of Electrical Engineering and Computer Sciences, University of California Berkeley, Berkeley, USA
* Prashant Nalini Vasudevan, Department of Electrical Engineering and Computer Sciences, University of California Berkeley, Berkeley, USA
* Shafi Goldwasser, Simons Institute for the Theory of Computing, University of California Berkeley, Berkeley, USA
### Abstract
> The right of an individual to request the deletion of their personal data by an entity that might be storing it – referred to as the right to be forgotten – has been explicitly recognized, legislated, and exercised in several jurisdictions across the world, including the European Union, Argentina, and California. However, much of the discussion surrounding this right offers only an intuitive notion of what it means for it to be fulfilled – of what it means for such personal data to be deleted.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_13](https://doi.org/10.1007/978-3-030-45724-2_13)
## OptORAMa: Optimal Oblivious RAM.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-2.md#optorama-optimal-oblivious-ram)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-2.md#optorama-optimal-oblivious-ram)
### Authors
* Gilad Asharov, Bar-Ilan University, 52900, Ramat Gan, Israel
* Ilan Komargodski, NTT Research, Palo Alto, CA, 94303, USA
* Wei-Kai Lin, Cornell University, Ithaca, NY, 14850, USA
* Elaine Shi, Cornell University, Ithaca, NY, 14850, USA
* Kartik Nayak, Duke University, Durham, NC, 27708, USA
* Enoch Peserico, Università degli Studi di Padova, Padova, PD, Italy
### Abstract
> Oblivious RAM (ORAM), first introduced in the ground-breaking work of Goldreich and Ostrovsky (STOC ’87 and J. ACM ’96) is a technique for provably obfuscating programs’ access patterns, such that the access patterns leak no information about the programs’ secret inputs. To compile a general program to an oblivious counterpart, it is well-known that \(\varOmega (\log N)\) amortized blowup is necessary, where N is the size of the logical memory. This was shown in Goldreich and Ostrovksy’s original ORAM work for statistical security and in a somewhat restricted model (the so called balls-and-bins model), and recently by Larsen and Nielsen (CRYPTO ’18) for computational security.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_14](https://doi.org/10.1007/978-3-030-45724-2_14)
## On the Streaming Indistinguishability of a Random Permutation and a Random Function.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-2.md#on-the-streaming-indistinguishability-of-a-random-permutation-and-a-random-function)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-2.md#on-the-streaming-indistinguishability-of-a-random-permutation-and-a-random-function)
### Authors
* Itai Dinur, Department of Computer Science, Ben-Gurion University, Beersheba, Israel
### Abstract
> An adversary with S bits of memory obtains a stream of Q elements that are uniformly drawn from the set \(\{1,2,\ldots ,N\}\), either with or without replacement. This corresponds to sampling Q elements using either a random function or a random permutation. The adversary’s goal is to distinguish between these two cases.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_15](https://doi.org/10.1007/978-3-030-45724-2_15)
## He Gives C-Sieves on the CSIDH.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-2.md#he-gives-c-sieves-on-the-csidh)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-2.md#he-gives-c-sieves-on-the-csidh)
### Authors
* Chris Peikert, University of Michigan, Ann Arbor, USA
### Abstract
> Recently, Castryck, Lange, Martindale, Panny, and Renes proposed CSIDH (pronounced “sea-side”) as a candidate post-quantum “commutative group action.” It has attracted much attention and interest, in part because it enables noninteractive Diffie–Hellman-like key exchange with quite small communication. Subsequently, CSIDH has also been used as a foundation for digital signatures.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_16](https://doi.org/10.1007/978-3-030-45724-2_16)
## Quantum Security Analysis of CSIDH.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-2.md#quantum-security-analysis-of-csidh)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-2.md#quantum-security-analysis-of-csidh)
### Authors
* Xavier Bonnetain, Sorbonne Université, Collège Doctoral, 75005, Paris, France
* Xavier Bonnetain, Inria, Paris, France
* André Schrottenloher, Inria, Paris, France
### Abstract
> CSIDH is a recent proposal for post-quantum non-interactive key-exchange, based on supersingular elliptic curve isogenies. It is similar in design to a previous scheme by Couveignes, Rostovtsev and Stolbunov, but aims at an improved balance between efficiency and security. In the proposal, the authors suggest concrete parameters in order to meet some desired levels of quantum security. These parameters are based on the hardness of recovering a hidden isogeny between two elliptic curves, using a quantum subexponential algorithm of Childs, Jao and Soukharev. This algorithm combines two building blocks: first, a quantum algorithm for recovering a hidden shift in a commutative group. Second, a computation in superposition of all isogenies originating from a given curve, which the algorithm calls as a black box.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_17](https://doi.org/10.1007/978-3-030-45724-2_17)
## Rational Isogenies from Irrational Endomorphisms.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-2.md#rational-isogenies-from-irrational-endomorphisms)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-2.md#rational-isogenies-from-irrational-endomorphisms)
### Authors
* Wouter Castryck, imec-COSIC, KU Leuven, Leuven, Belgium
* Frederik Vercauteren, imec-COSIC, KU Leuven, Leuven, Belgium
* Lorenz Panny, Department of Mathematics and Computer Science, Technische Universiteit Eindhoven, Eindhoven, The Netherlands
### Abstract
> In this paper, we introduce a polynomial-time algorithm to compute a connecting \(\mathcal {O}\)-ideal between two supersingular elliptic curves over \(\mathbb {F}_p\) with common \(\mathbb {F}_p\)-endomorphism ring \(\mathcal {O}\), given a description of their full endomorphism rings. This algorithm provides a reduction of the security of the CSIDH cryptosystem to the problem of computing endomorphism rings of supersingular elliptic curves. A similar reduction for SIDH appeared at Asiacrypt 2016, but relies on totally different techniques. Furthermore, we also show that any supersingular elliptic curve constructed using the complex-multiplication method can be located precisely in the supersingular isogeny graph by explicitly deriving a path to a known base curve. This result prohibits the use of such curves as a building block for a hash function into the supersingular isogeny graph.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_18](https://doi.org/10.1007/978-3-030-45724-2_18)
## Hardness of LWE on General Entropic Distributions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-2.md#hardness-of-lwe-on-general-entropic-distributions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-2.md#hardness-of-lwe-on-general-entropic-distributions)
### Authors
* Zvika Brakerski, Weizmann Institute of Science, Rehovot, Israel
* Nico Döttling, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> The hardness of the Learning with Errors (LWE) problem is by now a cornerstone of the cryptographic landscape. In many of its applications the so called “LWE secret” is not sampled uniformly, but comes from a distribution with some min-entropy. This variant, known as “Entropic LWE”, has been studied in a number of works, starting with Goldwasser et al. (ICS 2010). However, so far it was only known how to prove the hardness of Entropic LWE for secret distributions supported inside a ball of small radius.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_19](https://doi.org/10.1007/978-3-030-45724-2_19)
## Key-Homomorphic Pseudorandom Functions from LWE with Small Modulus.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-2.md#key-homomorphic-pseudorandom-functions-from-lwe-with-small-modulus)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-2.md#key-homomorphic-pseudorandom-functions-from-lwe-with-small-modulus)
### Authors
* Sam Kim, Stanford University, Stanford, USA
### Abstract
> Pseudorandom functions (PRFs) are fundamental objects in cryptography that play a central role in symmetric-key cryptography. Although PRFs can be constructed from one-way functions generically, these black-box constructions are usually inefficient and require deep circuits to evaluate compared to direct PRF constructions that rely on specific algebraic assumptions. From lattices, one can directly construct PRFs from the Learning with Errors (LWE) assumption (or its ring variant) using the result of Banerjee, Peikert, and Rosen (Eurocrypt 2012) and its subsequent works. However, all existing PRFs in this line of work rely on the hardness of the LWE problem where the associated modulus is super-polynomial in the security parameter.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_20](https://doi.org/10.1007/978-3-030-45724-2_20)
## Integral Matrix Gram Root and Lattice Gaussian Sampling Without Floats.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-2.md#integral-matrix-gram-root-and-lattice-gaussian-sampling-without-floats)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-2.md#integral-matrix-gram-root-and-lattice-gaussian-sampling-without-floats)
### Authors
* Léo Ducas, Centrum Wiskunde en Informatica, Amsterdam, The Netherlands
* Steven Galbraith, Mathematics Department, University of Auckland, Auckland, New Zealand
* Thomas Prest, PQShield Ltd, Oxford, UK
* Yang Yu, Univ Rennes, CNRS, IRISA, Rennes, France
### Abstract
> Many advanced lattice based cryptosystems require to sample lattice points from Gaussian distributions. One challenge for this task is that all current algorithms resort to floating-point arithmetic (FPA) at some point, which has numerous drawbacks in practice: it requires numerical stability analysis, extra storage for high-precision, lazy/backtracking techniques for efficiency, and may suffer from weak determinism which can completely break certain schemes.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_21](https://doi.org/10.1007/978-3-030-45724-2_21)
## TNT: How to Tweak a Block Cipher.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-2.md#tnt-how-to-tweak-a-block-cipher)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-2.md#tnt-how-to-tweak-a-block-cipher)
### Authors
* Zhenzhen Bao, Division of Mathematical Sciences, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Jian Guo, Division of Mathematical Sciences, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Chun Guo, Key Laboratory of Cryptologic Technology and Information Security of Ministry of Education, Shandong University, Qingdao, China
* Chun Guo, School of Cyber Science and Technology, Shandong University, Qingdao, China
* Ling Song, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Ling Song, Jinan University, Guangzhou, China
### Abstract
> In this paper, we propose Tweak-aNd-Tweak (\(\mathsf {TNT}\) for short) mode, which builds a tweakable block cipher from three independent block ciphers. \(\mathsf {TNT}\) handles the tweak input by simply XOR-ing the unmodified tweak into the internal state of block ciphers twice. Due to its simplicity, \(\mathsf {TNT}\) can also be viewed as a way of turning a block cipher into a tweakable block cipher by dividing the block cipher into three chunks, and adding the tweak at the two cutting points only. \(\mathsf {TNT}\) is proven to be of beyond-birthday-bound \(2^{2n/3}\) security, under the assumption that the three chunks are independent secure n-bit SPRPs. It clearly brings minimum possible overhead to both software and hardware implementations. To demonstrate this, an instantiation named TNT-AES with \(6 \), \(6 \), \(6 \) rounds of AES as the underlying block ciphers is proposed. Besides the inherent proven security bound and tweak-independent rekeying feature of the \(\mathsf {TNT}\) mode, the performance of TNT-AES is comparable with all existing TBCs designed through modular methods.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_22](https://doi.org/10.1007/978-3-030-45724-2_22)
## On a Generalization of Substitution-Permutation Networks: The HADES Design Strategy.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-2.md#on-a-generalization-of-substitution-permutation-networks-the-hades-design-strategy)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-2.md#on-a-generalization-of-substitution-permutation-networks-the-hades-design-strategy)
### Authors
* Lorenzo Grassi, IAIK, Graz University of Technology, Graz, Austria
* Reinhard Lüftenegger, IAIK, Graz University of Technology, Graz, Austria
* Christian Rechberger, IAIK, Graz University of Technology, Graz, Austria
* Markus Schofnegger, IAIK, Graz University of Technology, Graz, Austria
* Dragos Rotaru, University of Bristol, Bristol, UK
* Lorenzo Grassi, Know-Center, TU Graz, Graz, Austria
* Dragos Rotaru, imec-Cosic, Department of Electrical Engineering, KU Leuven, Leuven, Belgium
### Abstract
> Keyed and unkeyed cryptographic permutations often iterate simple round functions. Substitution-permutation networks (SPNs) are an approach that is popular since the mid 1990s. One of the new directions in the design of these round functions is to reduce the substitution (S-Box) layer from a full one to a partial one, uniformly distributed over all the rounds. LowMC and Zorro are examples of this approach.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_23](https://doi.org/10.1007/978-3-030-45724-2_23)
## Lightweight Authenticated Encryption Mode Suitable for Threshold Implementation.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-2.md#lightweight-authenticated-encryption-mode-suitable-for-threshold-implementation)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-2.md#lightweight-authenticated-encryption-mode-suitable-for-threshold-implementation)
### Authors
* Yusuke Naito, Mitsubishi Electric Corporation, Kamakura, Kanagawa, Japan
* Yu Sasaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Takeshi Sugawara, The University of Electro-Communications, Tokyo, Japan
### Abstract
> This paper proposes tweakable block cipher (TBC) based modes \(\mathsf {PFB\_Plus}\) and \(\mathsf {PFB}\omega \) that are efficient in threshold implementations (TI). Let t be an algebraic degree of a target function, e.g. \(t=1\) (resp. \(t>1\)) for linear (resp. non-linear) function. The d-th order TI encodes the internal state into \(d t + 1\) shares. Hence, the area size increases proportionally to the number of shares. This implies that TBC based modes can be smaller than block cipher (BC) based modes in TI because TBC requires s-bit block to ensure s-bit security, e.g. PFB and Romulus, while BC requires 2s-bit block. However, even with those TBC based modes, the minimum we can reach is 3 shares of s-bit state with \(t=2\) and the first-order TI (\(d=1\)).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_24](https://doi.org/10.1007/978-3-030-45724-2_24)
## PSI from PaXoS: Fast, Malicious Private Set Intersection.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-2.md#psi-from-paxos-fast-malicious-private-set-intersection)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-2.md#psi-from-paxos-fast-malicious-private-set-intersection)
### Authors
* Benny Pinkas, Bar-Ilan University, Ramat Gan, Israel
* Mike Rosulek, Oregon State University, Corvallis, USA
* Ni Trieu, Oregon State University, Corvallis, USA
* Avishay Yanai, VMware Research, Herzliya, Israel
### Abstract
> We present a 2-party private set intersection (PSI) protocol which provides security against malicious participants, yet is almost as fast as the fastest known semi-honest PSI protocol of Kolesnikov et al. (CCS 2016).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_25](https://doi.org/10.1007/978-3-030-45724-2_25)
## Two-Round Oblivious Transfer from CDH or LPN.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-2.md#two-round-oblivious-transfer-from-cdh-or-lpn)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-2.md#two-round-oblivious-transfer-from-cdh-or-lpn)
### Authors
* Nico Döttling, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Sanjam Garg, UC Berkeley, Berkeley, USA
* Mohammad Hajiabadi, UC Berkeley, Berkeley, USA
* Daniel Masny, VISA Research, Palo Alto, USA
* Daniel Wichs, Northeastern University, Boston, USA
### Abstract
> We show a new general approach for constructing maliciously-secure two-round oblivious transfer (OT). Specifically, we provide a generic sequence of transformations to upgrade a very basic notion of two-round OT, which we call elementary OT, to UC-secure OT. We then give simple constructions of elementary OT under the Computational Diffie-Hellman (CDH) assumption or the Learning Parity with Noise (LPN) assumption, yielding the first constructions of malicious (UC-secure) two-round OT under these assumptions. Since two-round OT is complete for two-round 2-party and multi-party computation in the malicious setting, we also achieve the first constructions of the latter under these assumptions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_26](https://doi.org/10.1007/978-3-030-45724-2_26)
## Private Aggregation from Fewer Anonymous Messages.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-2.md#private-aggregation-from-fewer-anonymous-messages)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-2.md#private-aggregation-from-fewer-anonymous-messages)
### Authors
* Badih Ghazi, Google Research, Mountain View, CA, 94043, USA
* Pasin Manurangsi, Google Research, Mountain View, CA, 94043, USA
* Rasmus Pagh, Google Research, Mountain View, CA, 94043, USA
* Ameya Velingker, Google Research, Mountain View, CA, 94043, USA
* Rasmus Pagh, IT University of Copenhagen, Copenhagen, Denmark
### Abstract
> Consider the setup where n parties are each given an element \(x_i\) in the finite field \(\mathbb {F}_q\) and the goal is to compute the sum \(\sum _i x_i\) in a secure fashion and with as little communication as possible. We study this problem in the anonymized model of Ishai et al. (FOCS 2006) where each party may broadcast anonymous messages on an insecure channel.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_27](https://doi.org/10.1007/978-3-030-45724-2_27)
## Broadcast-Optimal Two-Round MPC.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2020-2.md#broadcast-optimal-two-round-mpc)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2020-2.md#broadcast-optimal-two-round-mpc)
### Authors
* Ran Cohen, Northeastern University, Boston, USA
* Juan Garay, Texas A&M University, College Station, USA
* Vassilis Zikas, School of Informatics, University of Edinburgh & IOHK, Edinburgh, UK
### Abstract
> An intensive effort by the cryptographic community to minimize the round complexity of secure multi-party computation (MPC) has recently led to optimal two-round protocols from minimal assumptions. Most of the proposed solutions, however, make use of a broadcast channel in every round, and it is unclear if the broadcast channel can be replaced by standard point-to-point communication in a round-preserving manner, and if so, at what cost on the resulting security.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_28](https://doi.org/10.1007/978-3-030-45724-2_28)
